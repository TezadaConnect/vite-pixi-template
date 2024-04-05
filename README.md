# Vite Pixi Template
This is a sample for vite + vanilla-typescript + pixi.js

## How to set this up from fresh vite
- First we need to init a project in vite and choose a vanilla project
```bash
    npm init vite@latest

    # Choose vanilla js

    npm install

    npm run dev
```
- Install the pixijs package from npm

```bash
    npm install pixi.js
```

- Copy this code in main.ts (remove all current code in main.ts)
```js
    import { Application, Sprite, Assets } from 'pixi.js';
    import './css/main.css';

    const app: Application = new Application();

    await app.init({ background: "#7371fc", resizeTo: window});

    document.body.appendChild(app.canvas);

    // Kinda texture2d
    const happyPackedScene = await Assets.load('https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png');

    // A node like sprite class
    const image = new Sprite(happyPackedScene);
    image.x = app.renderer.width / 2;
    image.y = app.renderer.height / 2;
    image.scale = 0.5;
    image.anchor.x = 0.5;
    image.anchor.y = 0.5;

    // its like add child to the node in godot when manually instantiating a scene
    app.stage.addChild(image);

    // this is kinda like the godot process method
    app.ticker.add(() => {
        image.rotation += .02;
    });
```
- Remove any files inside src but not the main.ts | vite-env.d.ts

- Create a css folder and a main.css file and link it properly in main.ts
```css
    * {
        padding: 0;
        margin: 0;
        background-color: #7371fc;
        overflow: hidden;
    }
```
