import { useEffect, useState } from "react";
import { L7ContainerProps } from "../../typings/L7Props";
import { Store } from "../store";
import { OptionItem } from "../store/objects/OptionItem";

export default function(props: L7ContainerProps) {
    const [store] = useState(new Store(props));

    useEffect(() => {
        OptionItem.cfg = props;
        if (props.mxObject) {
            store.mxObject = props.mxObject;
        }

        return () => {};
    }, [props.mxObject]);
    return store;
}
