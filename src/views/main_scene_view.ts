import { Assets, Sprite, Texture } from "pixi.js";
import { PixiView } from "../core/PixiView";
import { router } from "../main";
import { LobbySceneView } from "./lobby_scene_view";

export class MainSceneView extends PixiView{
 
    private _image: Sprite | null = null;
    private _happyPackedScene: Texture | null = null;

    public override async ready (): Promise<void> {
        this._happyPackedScene = await Assets.load('./src/assets/img/center-tile.png');
        // console.log("Initializing");
        this.addHappyImage();

        setTimeout(() => {
            console.log("Hello");
            router.changeScene(new LobbySceneView());
        }, 2000);
    }

    public override process():void{
        if(this._image){
            this._image.rotation += 0.02;
        }  
    }

    public addHappyImage() {
        this._image = new Sprite(this._happyPackedScene!);
        this._image.x = this.width / 2;
        this._image.y = this.height / 2;
        this._image.scale = 0.5;
        this._image.anchor.set(0.5);    
        this.addChild(this._image);
    }
}