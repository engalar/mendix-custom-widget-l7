import { fetchByXpath } from "@jeltemx/mendix-react-widget-utils";
import { CascaderOptionType } from "antd/lib/cascader";
import { configure, flow, makeObservable, observable, when } from "mobx";
import { L7ContainerProps } from "../../typings/L7Props";

configure({ enforceActions: "observed", isolateGlobalState: true, useProxies: "never" });

export class Store {
    mxObject?: mendix.lib.MxObject;
    /**
     * dispose
     */
    public dispose() {}

    constructor(public props: Omit<L7ContainerProps, "mxObject">) {
        makeObservable(this, { options: observable, load: flow.bound, mxObject: observable });

        when(
            () => !!this.mxObject,
            () => {
                fetchByXpath(this.mxObject!, props.entityMark, props.constrainMark);
            }
        );
    }

    public options: CascaderOptionType[] | undefined = [
        {
            value: "zhejiang",
            label: "Zhejiang",
            isLeaf: false
        },
        {
            value: "jiangsu",
            label: "Jiangsu",
            isLeaf: false
        }
    ];

    *load(selectedOptions?: CascaderOptionType[]) {
        if (!selectedOptions) {
            return;
        }
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;

        targetOption.children = yield new Promise<CascaderOptionType[]>((resolve, _reject) => {
            setTimeout(() => {
                resolve([
                    {
                        label: `${targetOption.label} Dynamic 1`,
                        value: "dynamic1"
                    },
                    {
                        label: `${targetOption.label} Dynamic 2`,
                        value: "dynamic2"
                    }
                ]);
            }, 1000);
        });

        targetOption.loading = false;
        this.options = [...this.options!];
    }
}
