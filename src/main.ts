import { Application } from 'pixi.js';
import './css/main.css';
import { RouteManager } from './manager/route_manager';

export const app = new Application();

await app.init({ background: "#000000", resizeTo: window});

document.body.appendChild(app.canvas);

export const router = new RouteManager();

router.startGame();



