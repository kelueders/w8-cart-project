// EXTERNAL IMPORTS
import {v4 as uuidv4} from "uuid";

// INTERNAL IMPORTS
import Item from './Item';

export default class User {

    private _id: string = uuidv4();
    private _cart: Item[] = [];

    constructor(
        private _name: string,
        private _age: number       
    ) {}

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }

    // Adds an item to the cart
    public addToCart(item: Item): void {
        this.cart.push(item)
    }

    // Removes all instances of item from the user's cart
    public removeFromCart(item: Item): void {
        this.cart = this.cart.filter((test_item) => test_item !== item)
    }

    // Removes a specific quantity of item from the user's cart
    public removeQuantityFromCart(item: Item, remove_amt: number): void {

        let index = 0
        while (index < this.cart.length && remove_amt > 0) {
            if (this.cart[index].name === item.name) {
                this.cart.splice(index, 1);
                remove_amt--;
            } else {
                index++;
            }
        }
    }

    // Calculates the total cost of the items in the cart
    public cartTotal(): number {
        let total_cost = 0

        for (let product of this.cart) {
            total_cost += product.price
        }
        console.log(`Total cost: $${Number(total_cost).toFixed(2)}`)
        console.log('')
        return total_cost
    }

    // Prints the contents of the cart
    public printCart(): void {
        console.log(`${this.name} has ${this.cart.length} item(s) in their cart`)
        // console.table(this.cart, ["name", "price", "description"])
        console.log('Item                 Price                 Description')
        for (let product of this.cart) {
            console.log(`${product.name}                 ${product.price}                 ${product.description}`)
        }
        console.log('')
    }

    static loginUser(): User {
        const name: HTMLInputElement | null = document.querySelector("#name");
        const age: HTMLInputElement | null = document.querySelector("#age");
        console.log(name?.value, age?.value);
    
        const newUser: User = new User(String(name?.value), Number(age?.value));
        return newUser
    }

    cartHTMLElement(cart: Item[]): void {
        cart.forEach(element => {
            const html = `<div class='cart-display'>
                <ul>
                    <li>${element.name}</li>
                    <li>${element.description}</li>
                </ul>
            </div>`

            document.querySelector(".cart")?.insertAdjacentHTML("beforeend", html)
        })
    }
    
}