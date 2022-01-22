import { _W } from "../../../typings/L7Props";
import { BaseMxObject } from "./BaseMxObject";

export class OptionItem extends BaseMxObject {
    static cfg: _W;
    /**
     *
     * @param guid mxobj guid
     */
    name: string;
    longitude: number;
    latitude: number;
    constructor(guid: string) {
        super(guid);
        const obj = this.mxObject;
        this.name = obj.get(OptionItem.cfg.name) as string;
        this.longitude = obj.get(OptionItem.cfg.longitude) as number;
        this.latitude = obj.get(OptionItem.cfg.latitude) as number;
    }
}
