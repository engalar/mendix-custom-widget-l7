import { createElement } from "react";
import { Observer } from "mobx-react";
import { Store } from "../store";

import { Cascader as C } from "antd";
export interface L7ComponentProps {
    store: Store;
}

const onChange = (value: any, selectedOptions: any) => {
    console.log(value, selectedOptions);
};

export function L7Component(props: L7ComponentProps) {
    console.log(props);

    return (
        <Observer>
            {() => <C options={props.store.options} loadData={props.store.load} onChange={onChange} changeOnSelect />}
        </Observer>
    );
}
