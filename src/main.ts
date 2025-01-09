import { Application, Assets, Graphics, Sprite, Text } from "pixi.js";

const app = new Application();

let toggleEnabled = true;

await app.init({
  background: "#1099bb",
  resizeTo: window,
  accessibilityOptions: {
    enabledByDefault: toggleEnabled,
    deactivateOnMouseMove: false,
  }
});

document.body.appendChild(app.canvas); 

const texture = await Assets.load("https://pixijs.com/assets/bunny.png").then((texture) => {
  return texture;
});

const bunnySprite = Sprite.from(texture);

let x = 0;
let y = 0;
let bunnyNum = 0;

function createBunny(x: number, y: number) {
  const bunnySprite = Sprite.from(texture);
  
  bunnySprite.x = x;
  bunnySprite.y = y;
  
  bunnySprite.accessible = true;
  bunnySprite.accessibleHint = `Bunny ${bunnyNum}`;
  bunnySprite.accessibleType = "button";
  bunnySprite.interactive = true;
  
  bunnySprite.on("click", () => {
      bunnySprite.tint = 0xff0000;
      if(bunnyNum < 10) {
        x += 50;
        y += 50;
        bunnyNum++;
        createBunny(x, y);
      }
  });
  bunnySprite.on("mouseover", () => {
      bunnySprite.tint = 0x00ff00;
  });
  bunnySprite.on("mouseout", () => {
    bunnySprite.tint = 0xffffff;
  });
  
  app.stage.addChild(bunnySprite);
  return bunnySprite;
}

const bunny = createBunny(100, 100);

// example title text
const titleText = new Text({
  text: 'Hello Pixi!',
  style: {
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 0xff1010,
      align: 'center',
  }
});

titleText.x = 100;
titleText.y = 100;

titleText.accessible = true;
titleText.accessibleTitle = "Title";
titleText.accessibleText = "This is a title";
titleText.accessibleType = "h1";
titleText.accessiblePointerEvents = 'none';

const divText = new Text({
  text: "div text",
  style: {
    fontFamily: 'Arial',
    fontSize: 24,
  }
});

divText.x = 100;
divText.y = 150;

divText.accessible = true;
divText.accessibleTitle = "div Text";
divText.accessibleText = "This is a div text";
divText.accessibleType = "div";

const paragraphText = new Text({
  text: "paragraph text",
  style: {
    fontFamily: 'Arial',
    fontSize: 24,
  }
});

paragraphText.x = 100;
paragraphText.y = 200;

paragraphText.accessible = true;
paragraphText.accessibleTitle = "Paragraph Text";
paragraphText.accessibleText = "This is a paragraph text";
paragraphText.accessibleType = "p";

app.stage.addChild(titleText);
app.stage.addChild(divText);
app.stage.addChild(paragraphText);

// Make an accessible toggle button that toggles the accessibility of the app
// This should just be a standard HTML button with an accessible label
const accessibleToggleButton = document.createElement("button");
accessibleToggleButton.textContent = toggleEnabled ? "Accessibility" : "No Accessibility";
accessibleToggleButton.style.cssText = "padding: 10px; margin: 10px; font-size: 16px; position: absolute; top: 0; left: 0;";
accessibleToggleButton.addEventListener("click", () => {
  toggleEnabled = !toggleEnabled;
  app.renderer.accessibility.setAccessibilityEnabled(toggleEnabled);
  if(toggleEnabled) {
    accessibleToggleButton.textContent = "Accessibility";
  } else {
    accessibleToggleButton.textContent = "No Accessibility";
  }
});

document.body.appendChild(accessibleToggleButton);

let bunnySpeed = 1;

const bunnyInterval = setInterval(() => {
  bunny.x += bunnySpeed;
  if(bunny.x > app.screen.width || bunny.x < 0) {
    bunnySpeed *= -1;
  }
}, 16);

setTimeout(() => {
  bunny.destroy();
  app.stage.removeChild(bunny);
  clearInterval(bunnyInterval);
}, 5000)
