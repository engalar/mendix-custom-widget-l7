import { createElement, useState } from "react";

import { L7ContainerProps } from "../typings/L7Props";

import "./ui/index.scss";

import { Observer } from "mobx-react";
import { Store } from "./store";
import { L7Component } from "./components/L7Component";

export default function (props: L7ContainerProps) {
    console.log(props);

    const [store] = useState(new Store());

    return <Observer>{() => <L7Component store={store} />}</Observer>;
}
