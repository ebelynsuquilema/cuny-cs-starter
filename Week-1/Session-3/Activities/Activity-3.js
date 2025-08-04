// Week 1 Session 3: Object Creation Practice

// Challenge 1: Contact Card
// TODO: Create an object representing a contact
// Include: name, phone, email, address
let contact = {
    // Your code here
    name: "Ebelyn Suquilema",
    phone: "646-123-4567",
    email: "ebelyn.suquilema@example.com",
    address: "123 Main St, Hollis, USA"
};

// TODO: Access and print the contact's name
console.log(contact.name);

// TODO: Update the contact's phone number
contact.phone = "646-765-4321";

// TODO: Add a new property for birthday
contact.birthday = "September 12, 2006";

// Challenge 2: Product Catalog
// TODO: Create an object for a product
// Include: name, price, inStock, category
/**
 * @type {{
 *   name: string,
 *   price: number,
 *   inStock: boolean,
 *   category: string,
 *   applyDiscount?: (discountPercentage: number) => void,
 *   isInStock?: () => boolean
 * }}
 */
let product = {
    // Your code here
    name: "Dubai Chocolate",
    price: 19.99,
    inStock: true,
    category: "Sweets"
};

// TODO: Create a method to apply a discount
product.applyDiscount = function(discountPercentage) {
    this.price -= this.price * (discountPercentage / 100);
};

// Challenge 3: Game Character
/**
 * @type {{
 *   name: string,
 *   health: number,
 *   level: number,
 *   inventory: number[],
 *   addItem?: (item: number) => void,
 *   takeDamage?: (amount: number) => void,
 *   levelUp?: () => void
 * }}
 */
let character = {
    // Your code here
    name: "Labubu",
    health: 100,
    level: 67,
    inventory: [3, 5, 7, 9]
};
// Challenge 3: Game Character
// TODO: Create a game character object
// Include: name, health, level, inventory (array)
// (Already declared above)

// TODO: Create a method to add item to inventory
character.addItem = function(item) {
    this.inventory.push(item);
};

// TODO: Create a method to take damage
character.takeDamage = function(amount) {
    this.health -= amount;
};

// TODO: Create a method to level up
character.levelUp = function() {
    this.level += 1;
};

// BONUS CHALLENGES
// 1. Create a method to display all contact info formatted nicely
contact.displayInfo = function() {
    return `Name: ${this.name}\nPhone: ${this.phone}\nEmail: ${this.email}\nAddress: ${this.address}\nBirthday: ${this.birthday}`;
};
console.log(contact.displayInfo());

// 2. Create a function to compare two products by price
function compareProductsByPrice(productA, productB) {
    if (productA.price > productB.price) {
        return `${productA.name} is more expensive than ${productB.name}`;
    } else if (productA.price < productB.price) {
        return `${productB.name} is more expensive than ${productA.name}`;
    } else {
        return `${productA.name} and ${productB.name} have the same price`;
    }
}
// Example usage:
let anotherProduct = {
    name: "Chicken Breast",
    price: 15.99,
    inStock: true,
    category: "Meat"
};
console.log(compareProductsByPrice(product, anotherProduct));

// 3. Create a battle method that compares two characters
function battle(characterA, characterB) {
    if (characterA.level > characterB.level) {
        return `${characterA.name} wins the battle!`;
    } else if (characterA.level < characterB.level) {
        return `${characterB.name} wins the battle!`;
    } else {
        return "It's a tie!";
    }
}
// Example usage:
let anotherCharacter = {
    name: "Labubu",
    health: 90,
    level: 70,
    inventory: [2, 4, 6]
};
console.log(battle(character, anotherCharacter));