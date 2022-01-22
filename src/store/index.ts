import { fetchByXpath } from "@jeltemx/mendix-react-widget-utils";
import { configure, makeObservable, observable, when } from "mobx";
import { L7ContainerProps } from "../../typings/L7Props";
import { OptionItem } from "./objects/OptionItem";

configure({ enforceActions: "observed", isolateGlobalState: true, useProxies: "never" });

export class Store {
    mxObject?: mendix.lib.MxObject;
    marks: OptionItem[] = [];
    /**
     * dispose
     */
    public dispose() {}

    constructor(public props: Omit<L7ContainerProps, "mxObject">) {
        makeObservable(this, { mxObject: observable });

        when(
            () => !!this.mxObject,
            () => {
                fetchByXpath(this.mxObject!, props.entityMark, props.constrainMark).then(objs => {
                    console.log(objs);
                    if (objs) {
                        this.marks = this.marks.concat(objs.map(d => new OptionItem(d.getGuid())));
                    }
                });
            }
        );
    }
}
