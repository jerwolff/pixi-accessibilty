import { Application, Point } from "pixi.js";
import { Bunny } from "./components/bunny";
import { Header } from "./components/header";
import { Paragraph } from "./components/paragraph";
import { Button } from "./components/button";


const app = new Application();

await app.init({
  background: "#1099bb",
  resizeTo: window,
});

app.renderer.accessibility.init({
  accessibilityOptions: {
    enabledByDefault: true,
    activateOnTab: false,
    deactivateOnMouseMove: false,
  }
});

document.body.appendChild(app.canvas); 
createHeaders();
createRegularText();
createButton();
createBunny();

function createHeaders() {
  const header = new Header({
    text: "Welcome to the Accessibility Demo",
    style: {
        fontFamily: "Arial",
        fontSize: 36,
        fill: "#000000",
    },
    position: {
      x: 20,
      y: 20
    }
  }, "h1");
  app.stage.addChild(header);

  const header2 = new Header({
    text: "This is another header, but smaller and less important.",
    style: {
        fontFamily: "Arial",
        fontSize: 24,
        fill: "#000000",
    },
    position: {
      x: 20,
      y: 80
    }
  }, "h2");
  app.stage.addChild(header2);

  const anotherLargeHeader = new Header({
    text: "This is another large header.",
    style: {
      fontFamily: "Arial",
      fontSize: 36,
      fill: "#000000",
    },
    position: {
      x: 20,
      y: 240
    }
  }, "h1");
  app.stage.addChild(anotherLargeHeader);
  
}

function createRegularText() {
  const regularText = new Paragraph({
    text: "This is a simple piece of text that is accessible.",
    style: {
        fontFamily: "Arial",

        fontSize: 16,
        fill: "#333333",
    },
    position: {
      x: 20,
      y: 120
    }
  });
  app.stage.addChild(regularText);

}

function createButton() {

  const button = new Button({
    text: "Click Me",
    textStyle: {
      fontFamily: "Arial",
      fontSize: 24,
      fill: "#ffffff"
    },
    position: new Point(20, 160),
    width: 200,
    height: 50,
    backgroundColor: 0x0000ff,
    onClick: () => {
      console.log("Button clicked!");
      alert("Button was clicked!");
    }
  });
  app.stage.addChild(button);
}

function createBunny() {
  const bunny = new Bunny(20, 400);
  app.stage.addChild(bunny);
}

