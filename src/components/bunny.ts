import { Texture, Sprite, Assets, Ticker } from "pixi.js";

const bunnyTextureURL = "https://pixijs.com/assets/bunny.png";
const texture = await Assets.load(bunnyTextureURL).then((texture: Texture) => {
  return texture;
});

export class Bunny extends Sprite {
  constructor(x: number, y: number) {
    super(texture);
    this.x = x;
    this.y = y;
    this.scale.set(4);
    this.accessible = true;
    this.accessibleHint = "Bunny Sprite";

    // Make the bunny interactive
    this.interactive = true;
    this.onpointertap = () => this.goofyAnimation();
  }


  goofyAnimation(): void {
    let elapsed = 0;
    const duration = 60; // 60 ticks ~ 1 second at 60fps

    // Cache initial state to reset later.
    const initRotation = this.rotation;
    const initScale = this.scale.x;
    const initX = this.x;

    // Create a new Ticker instance for this particular animation.
    const ticker = new Ticker();

    ticker.add(() => {
      elapsed++;

      // Wiggle rotation in a sine pattern.
      this.rotation = initRotation + Math.sin(elapsed * 0.3) * 0.2;

      // Scale vibration: bounce the scale a bit.
      const scaleFactor = 1 + Math.sin(elapsed * 0.4) * 0.1;
      this.scale.set(initScale * scaleFactor);

      // Slight horizontal bounce.
      this.x = initX + Math.sin(elapsed * 0.5) * 5;

      if (elapsed >= duration) {
        // End the animation: reset properties and clean up the ticker.
        this.rotation = initRotation;
        this.scale.set(initScale);
        this.x = initX;
        ticker.stop();
        ticker.destroy();
      }
    });

    ticker.start();
  }
}




