/**
 * This file was generated from Cascader.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    tabIndex: number;

    uniqueid: string;
    friendlyId?: string;
    mxform: mxui.lib.form._FormBase;
    mxObject?: mendix.lib.MxObject;
    readOnly: boolean;
    style: string;
}

interface _W {}

export interface L7ContainerProps extends CommonProps, _W {
    myString: string;
}

export interface L7PreviewProps extends _W {
    class: string;
    style: string;
    styleObject: CSSProperties;
    myString: string;
}

export interface VisibilityMap {
    [P in _W]: boolean;
}
