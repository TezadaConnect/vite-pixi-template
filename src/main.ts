import './css/main.css';
import { MainSceneController } from './controllers/main_scene_controller';
import { Ticker } from 'pixi.js';

const startGame = async () => {
  const controller: MainSceneController = new MainSceneController();
  Ticker.shared.add(controller.process.bind(controller));
}

startGame();