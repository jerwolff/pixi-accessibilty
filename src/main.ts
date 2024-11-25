import { Application, Assets, Sprite, Text } from "pixi.js";

const app = new Application();

await app.init({
  background: "#1099bb",
  resizeTo: window,
});

document.body.appendChild(app.canvas);

const texture = await Assets.load("https://pixijs.com/assets/bunny.png").then((texture) => {
  app.renderer.accessibility.setAccessibilityEnabled();
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