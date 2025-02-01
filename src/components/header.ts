import { Text, TextOptions } from "pixi.js";

export class Header extends Text {

    constructor(textOptions: TextOptions, headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
        super(textOptions);
        this.accessible = true;
        this.accessibleType = headerType;
        this.accessibleText = this.text;
    }

}