import { Application, Assets, Sprite } from "pixi.js";

export class MainSceneController extends Application{
 
    private _image: Sprite | null = null;

    constructor () { 
        super();
        this.ready();
    };

    public async ready (): Promise<void> {
        console.log("Initializing");
        await this.init({ background: "#7371fc", resizeTo: window});
        document.body.appendChild(this.canvas);
        await this.addHappyImage();
    }

    public process():void{
        if(this._image){
            this._image.rotation += 0.02;
        }      
    }

    public async addHappyImage(){
        const _happyPackedScene: any = await Assets.load('https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png');
        this._image = new Sprite(_happyPackedScene);
        this._image.x = this.renderer.width / 2;
        this._image.y = this.renderer.height / 2;
        this._image.scale = 0.5;
        this._image.anchor.x = 0.5;
        this._image.anchor.y = 0.5;
        this.stage.addChild(this._image);
    }
}