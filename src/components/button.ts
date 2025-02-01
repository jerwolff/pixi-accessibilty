import { Container, Graphics, Text, Point } from "pixi.js";

interface ButtonProps {
    position: Point;
    width: number;
    height: number;
    text?: string;
    backgroundColor?: number;
    textStyle?: {
        fontFamily?: string;
        fontSize?: number;
        fill?: string;
    };
    onClick?: () => void;
}

export class Button extends Container {
    constructor(props: ButtonProps) {
        super();
        
        // Set position
        this.x = props.position.x;
        this.y = props.position.y;

        // Set up interactivity and accessibility
        this.interactive = true;
        this.accessible = true;
        this.accessibleHint = props.text || "Click Me";
        this.accessibleType = "button";

        // Add background
        const background = new Graphics()
            .roundRect(0, 0, props.width, props.height, 10)
            .fill({ 
                color: props.backgroundColor || 0x007acc, 
                alpha: 1 
            });
        this.addChild(background);

        // Add text if provided
        if (props.text) {
            const buttonText = new Text({
                text: props.text,
                style: {
                    fontFamily: props.textStyle?.fontFamily || "Arial",
                    fontSize: props.textStyle?.fontSize || 24,
                    fill: props.textStyle?.fill || "#ffffff",
                }
            });

            // Center the text in the button
            buttonText.x = (props.width - buttonText.width) / 2;
            buttonText.y = (props.height - buttonText.height) / 2;
            this.addChild(buttonText);
        }

        // Add click handler
        this.onpointertap = () => {
            if (props.onClick) {
                props.onClick();
            }
        };
    }
} 