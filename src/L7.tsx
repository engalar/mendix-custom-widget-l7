import { createElement } from "react";

import { L7ContainerProps } from "../typings/L7Props";

import "./ui/index.scss";

import { Observer } from "mobx-react";
import { L7Component } from "./components/L7Component";
import useEntityContext from "./hooks/useEntityContext";


export default function (props: L7ContainerProps) {
    const store = useEntityContext(props);

    return <Observer>{() => <L7Component store={store} />}</Observer>;
}
