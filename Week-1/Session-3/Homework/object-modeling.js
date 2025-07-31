// Week 1 Session 3 Homework: Object Modeling

// Task 1: Recipe Object
// TODO: Create a recipe object with ingredients list and instructions
let recipe = {
    name: "Chocolate Chip Cookies",
    servings: 24,
    // Add more properties here
    ingredients: [
        { ingredient: "Flour", amount: "2 cups" },
        { ingredient: "Sugar", amount: "1 cup" },
        { ingredient: "Brown Sugar", amount: "1 cup" },
        { ingredient: "Butter", amount: "1 cup" },
        { ingredient: "Eggs", amount: "2" },
        { ingredient: "Vanilla Extract", amount: "1 tsp" },
        { ingredient: "Baking Soda", amount: "1 tsp" },
        { ingredient: "Salt", amount: "1/2 tsp" },
        { ingredient: "Chocolate Chips", amount: "2 cups" }
    ],
    instructions: [
        "Preheat oven to 350°F (175°C).",
        "In a bowl, cream together the butter, sugar, and brown sugar until smooth.",
        "Beat in the eggs one at a time, then stir in the vanilla.",
        "Combine flour, baking soda, and salt; gradually blend into the creamed mixture.",
        "Stir in chocolate chips.",
        "Drop by rounded spoonfuls onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until edges are golden brown.",
        "Cool on wire racks."
    ]
};

// Test your object
console.log(`Recipe: ${recipe.name}`);
// Add more tests to display ingredients and instructions
console.log("Ingredients:");
recipe.ingredients.forEach(ing => {
    console.log(`${ing.amount} of ${ing.ingredient}`);
});
console.log("Instructions:");
recipe.instructions.forEach((step, index) => {
    console.log(`${index + 1}. ${step}`);
});


// Task 2: Bank Account Object
// TODO: Create a bank account object with balance and transaction methods
let bankAccount = {
    accountNumber: "1234567890",
    balance: 1000,
    // Add more properties and methods here
    transactions: [],

    deposit: function (amount) {
        this.balance += amount;
        this.transactions.push({ type: "deposit", amount: amount });
    },

    withdraw: function (amount) {
        this.balance -= amount;
        this.transactions.push({ type: "withdraw", amount: amount });
    },

    getBalance: function () {
        return this.balance;
    },

    getTransactionHistory: function () {
        return this.transactions;   
    }
};

// Test your object
bankAccount.deposit(500);
console.log("Balance after deposit:", bankAccount.getBalance());
bankAccount.withdraw(200);
console.log("Balance after withdrawal:", bankAccount.getBalance());


// Task 3: Music Album Object
// TODO: Create a music album object with tracks and duration
let album = {
    title: "Greatest Hits",
    artist: "The Classics",
    // Add more properties here
    tracks: [],

    addTrack: function (trackName, duration) {
        this.tracks.push({ name: trackName, duration: duration });
    },

    getTotalDuration: function () {
        return this.tracks.reduce((total, track) => total + track.duration, 0);
    }
};

// Test your object
album.addTrack("Song One", 3.5);
album.addTrack("Song Two", 4.2);
console.log("Total album duration:", album.getTotalDuration(), "minutes");


// BONUS CHALLENGES
// 1. Add a method to the recipe object to scale ingredients for different serving sizes
// 2. Add transaction history to the bank account object
// 3. Add a method to the album object to find tracks by name