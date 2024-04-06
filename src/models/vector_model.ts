export class Vector {
    private _x : number = 0;
    private _y : number = 0;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public x(): number{
        return this._x;
    }

    public y(): number{
        return this._y;
    }
}