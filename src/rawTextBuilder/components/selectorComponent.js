import Base from "./rawTextComponent.js";
import { SelectorBuilder, Selectors } from "../../selectorBuilder.js";


export default class SelectorComponent extends Base{
    name = "selector";

    constructor(selector) {
        if(selector instanceof SelectorBuilder ||
            Object.values(Selectors).includes(selector.toLowerCase())) {
            super(selector);
            return;
        }
        throw "type error";
    }
}
