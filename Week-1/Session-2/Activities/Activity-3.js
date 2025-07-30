// Week 1 Session 2: Loop Practice

// Challenge 1: Countdown Timer
// TODO: Create a countdown from 10 to 1
// After countdown, display "Blast off!"
console.log("Countdown starting...");
// Your code here
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Blast off!");


// Challenge 2: Menu Repeater  
// TODO: Display a menu item multiple times
// Show "Special: Burger & Fries" 5 times
let menuItem = "Special: Burger & Fries";
// Your code here
for (let i = 0; i < 5; i++) {
    console.log(menuItem);
}


// Challenge 3: Password Attempts
// TODO: Allow 3 attempts to enter correct password
// Use a while loop to count attempts
let correctPassword = "secret123";
let userPassword = "";
let attempts = 0;
let maxAttempts = 3;

// Your code here
// Hint: You'll need to simulate user input
// For now, try different values for userPassword
while (attempts < maxAttempts && userPassword !== correctPassword) {
    userPassword = prompt("Enter your password:"); // Simulating user input
    attempts++;
    if (userPassword === correctPassword) {
        console.log("Access granted!");
    } else {
        console.log("Incorrect password. Try again.");
    }
}
if (userPassword !== correctPassword) {
    console.log("Access denied. Too many attempts.");
}


// BONUS CHALLENGES
// 1. Create a loop that prints even numbers from 0 to 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
// 2. Create a loop that displays a pattern of stars (triangle shape)
let rows = 5; // Number of rows for the triangle
for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}
// 3. Create a loop that repeats until user enters "quit"
let userInput = "";
while (userInput.toLowerCase() !== "quit") {
    userInput = prompt("Type 'quit' to exit:");
    if (userInput.toLowerCase() !== "quit") {
        console.log("You entered: " + userInput);
    }
}
console.log("Exited the loop.");
