// 1. Shopping discount calculator (if/else based on purchase amount)
function calculateDiscount(total) {
    let discount = 0;
    if (total >= 100) {
        discount = 0.2; // 20% discount
    } else if (total >= 50) {
        discount = 0.1; // 10% discount
    } else {
        discount = 0; // No discount
    }
    let finalAmount = total - (total * discount);
    console.log(`Original: $${total}, Discount: ${discount * 100}%, Final: $${finalAmount}`);
    return finalAmount;
}

// Example usage:
calculateDiscount(120);
calculateDiscount(75);
calculateDiscount(30);

// 2. Simple menu system that repeats until user chooses exit
const readline = require('readline-sync');
let running = true;

while (running) {
    console.log("\nMenu:");
    console.log("1. Say Hello");
    console.log("2. Show Date");
    console.log("3. Exit");
    let choice = readline.question("Choose an option: ");

    if (choice === "1") {
        console.log("Hello!");
    } else if (choice === "2") {
        console.log("Today's date is " + new Date().toLocaleDateString());
    } else if (choice === "3") {
        console.log("Goodbye!");
        running = false;
    } else {
        console.log("Invalid choice. Try again.");
    }
}

// 3. Game score evaluator that gives feedback based on points
function evaluateScore(score) {
    if (score >= 100) {
        console.log("Amazing! High score!");
    } else if (score >= 50) {
        console.log("Good job! Keep going!");
    } else {
        console.log("Try again for a better score!");
    }
}

// Example usage:
evaluateScore(120);
evaluateScore(65);