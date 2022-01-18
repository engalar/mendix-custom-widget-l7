import { Component, ReactNode, createElement } from "react";
import { L7ContainerProps, L7PreviewProps } from "../typings/L7Props";

declare function require(name: string): string;

export class preview extends Component<L7PreviewProps> {
    render(): ReactNode {
        return <div>No preview available</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
type VisibilityMap = {
    [P in keyof L7ContainerProps]: boolean;
};

export function getVisibleProperties(props: L7ContainerProps, visibilityMap: VisibilityMap): VisibilityMap {
    // visibilityMap.nodeConstraint = props.nodeDataSource === "xpath";
    // visibilityMap.nodeGetDataMicroflow = props.nodeDataSource === "microflow";
    // visibilityMap.nodeGetDataNanoflow = props.nodeDataSource === "nanoflow";
    console.log(props);

    return visibilityMap;
}
