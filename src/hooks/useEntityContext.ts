import { useEffect, useState } from "react";
import { CommonProps } from "../../typings/L7Props";
import { Store } from "../store";

export default function(props: CommonProps) {
    const [store] = useState(new Store());

    useEffect(() => {
        if (props.mxObject) {
            store.mxObject = props.mxObject;
        }

        return () => {};
    }, [props.mxObject]);
    return store;
}
