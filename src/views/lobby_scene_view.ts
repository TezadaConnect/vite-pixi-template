import { Assets, Container, Graphics, Sprite, Texture } from "pixi.js";
import { PixiView } from "../core/PixiView";
import { app, router } from "../main";
import { Button } from "@pixi/ui";
import { MainSceneView } from "./main_scene_view";

export class LobbySceneView extends PixiView {
 
    private _image: Sprite | null = null;
    private _happyPackedScene: Texture | null = null;

    public override async ready (): Promise<void> {
        console.log("Initializing");
        await this.drawTextureImage();
        this.drawButton();
    }

    public override process():void{
        if(this._image){
            this._image.rotation += 0.02;
        }
    }

    public async drawTextureImage(): Promise<void> {
        this._happyPackedScene = await Assets.load('./src/assets/img/u-side-tile.png');
        if(!this._happyPackedScene){
            return;
        }
        this._image = new Sprite(this._happyPackedScene);
        this._image.x = this.width / 2;
        this._image.y = this.height / 2;
        this._image.scale = 0.5;
        this._image.anchor.set(0.5);    
        this.addChild(this._image);
    }

    private drawButton(){
        const intelHeight : number = 50;
        const intelWidth : number = 150;
        const container = new Container();
      
        const background = new Graphics().rect(
            0 - intelWidth/2,
            130, 
            intelWidth, 
            intelHeight
        ).fill(0xE04C51);

        container.addChild(background);
        const button = new Button(container);
        button.view.position.x = app.canvas.width / 2;
        button.view.position.y = app.canvas.height / 2;
        button.onPress.connect(this.onPressedButton)
        this.addChild(button.view);
    }


    private onPressedButton (){
        router.changeScene(new MainSceneView());
    }
}