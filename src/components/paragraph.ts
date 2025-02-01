import { Text, TextOptions } from "pixi.js";

export class Paragraph extends Text {

    constructor(options: TextOptions) {
        super(options);

        this.accessible = true;
        this.accessibleType = "p";
        this.accessibleText = this.text;
    }
}