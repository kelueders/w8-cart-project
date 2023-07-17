// EXTERNAL IMPORTS
import {v4 as uuidv4} from "uuid";

// INTERNAL IMPORTS
import Item from './Item';

export default class Shop {

    private _id: string = uuidv4();
    private _stock: Item[] = [];

    constructor(
        private _name: string
    ) {}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get name() {
        return this._name;
    }
    public set name(value) {
        this._name = value;
    }
    
    public get stock() {
        return this._stock;
    }
    public set stock(value) {
        this._stock = value;
    }

    public addToStock(item: Item): void {
        this.stock.push(item);
    }
}