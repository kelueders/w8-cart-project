// EXTERNAL IMPORTS


// INTERNAL IMPORTS
import Item from './Item';
import User from './User';
import Shop from './Shop';

// **************************
// WEEKEND PROJECT DRIVER CODE
// **************************

// *** Create a shop ***
const marianosMain = new Shop("Marianos Main Street")

// *** Create Items for the shop***
const item1 = new Item("milk", 2.50, "1 gal skim");
const item2 = new Item("cheese", 4.25, "1/4 lb block chedder");
const item3 = new Item("rice", 10.50, "10 lbs bag jasmine");
const item4 = new Item("M&Ms", 2.30, "8 oz bag")
const item5 = new Item("ham", 5.00, "1.2 lbs")
const item6 = new Item("salmon", 12.00, "1.23 lbs")
marianosMain.addToStock(item1)
marianosMain.addToStock(item2)
marianosMain.addToStock(item3)
marianosMain.addToStock(item4)
marianosMain.addToStock(item5)
marianosMain.addToStock(item6)
console.log(marianosMain)


// document.getElementById("signin").addEventListener("click", loginUser())
// User.loginUser("Kate", 33)

const userForm: HTMLElement | null = document.getElementById('userForm');

// Processes that happen when the user types in name and presses the submit button
userForm?.addEventListener("submit", (event): void => {
    event.preventDefault();
    // const name: HTMLInputElement | null = document.querySelector("#name");
    // const age: HTMLInputElement | null = document.querySelector("#age");
    // console.log(name?.value, age?.value);

    // const newUser: User = new User(String(name?.value), Number(age?.value));

    let newUser = User.loginUser()

    console.log(`Welcome ${newUser.name} !`);
    console.log(newUser)

    const welcome: any = document.getElementById("welcome");
    const html = `<h3>Hello, ${newUser.name}! Here is what we have in stock:</h3><br>
                    <p>Click the button to add the item to your cart</p>`
    welcome?.insertAdjacentHTML("beforeend", html)

    marianosMain.showItems(marianosMain.stock)
  
})


// const cart: HTMLElement | null = document.getElementsByClassName('cart');
// let user = User.loginUser()

// cart?.addEventListener("click", user.addToCart())


//     const print_cart: any = document.getElementById("cart");
//     const html2 = 







// ****************************
// DAY 4 HOMEWORK DRIVER CODE
// ****************************

// // *** Create a shop ***
// const marianosMain = new Shop("Marianos Main Street")

// // *** Create Items for the shop***
// const item1 = new Item("milk", 2.50, "1 gal skim");
// const item2 = new Item("cheese", 4.25, "1/4 lb block chedder");
// const item3 = new Item("rice", 10.50, "10 lbs bag jasmine");
// marianosMain.addToStock(item1)
// marianosMain.addToStock(item2)
// marianosMain.addToStock(item3)
// console.log(marianosMain)

// // ***Create a user***
// const kate = new User("Kate", 33)

// // ***Add items from the shop to the users cart***
// kate.addToCart(item1)
// kate.addToCart(item2)
// kate.addToCart(item2)
// kate.addToCart(item3)
// console.log(kate)

// // ***Print the cart***
// kate.printCart()

// // ***Remove all of a singular item***
// kate.removeFromCart(item2)
// kate.printCart()

// // ***Add back the items that were taken out***
// kate.addToCart(item2)
// kate.addToCart(item2)
// kate.printCart()

// // // Remove a specific quantity of cheese
// kate.removeQuantityFromCart(item2, 1)
// kate.printCart()













