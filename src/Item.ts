// EXTERNAL IMPORTS
import {v4 as uuidv4} from "uuid";

// INTERNAL IMPORTS

export default class Item {

    private _id: string = uuidv4()

    constructor(
        private _name: string,
        private _price: number,
        private _description: string
    ) {}

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }

    itemElement(item: Item): void {
        const html = `<div id="${item.id}" class="item-card">
                <ul>
                    <li>${item.name}</li>
                    <li>${item.description}</li>
                    <li>${item.price}</li>
                    <button class="button" onclick="addToCart(${item})">Add to Cart</button>
                </ul>
            </div>`
        document.querySelector(".shop")?.insertAdjacentHTML("beforeend", html)
    }

}