import './css/main.css';
import { MainSceneController } from './controllers/main_scene_controller';
import { Ticker } from 'pixi.js';

const startGame = async () => {
  const controller: MainSceneController = new MainSceneController();
  await controller.init({ background: "#7371fc", resizeTo: window});
  document.body.appendChild(controller.canvas);
  await controller.ready();
  Ticker.shared.add(controller.process.bind(controller));
}

startGame();