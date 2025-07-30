// Week 1 Session 2: Conditional Logic Practice

// Challenge 1: Grade Calculator
// TODO: Determine letter grade based on percentage
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
let score = 85;
// Your code here
console.log(score)
if (score >= 90) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else if (score >= 70) {
    console.log("You got a C!");
} else if (score >= 60) {
    console.log("You got a D!");
} else {
    console.log("You got an F!");
}


// Challenge 2: Movie Ticket Pricing
// TODO: Calculate ticket price based on age and time
// Child (under 12): $8
// Adult (12-64): $12
// Senior (65+): $10
// Matinee discount (before 5pm): $2 off
let age = 30;
let isMatinee = true; // true if before 5pm
// Your code here
console.log(isMatinee)
let ticketPrice;
if (age < 12) {
    ticketPrice = 8;
}
else if (age >= 12 && age < 65) {
    ticketPrice = 12;
}
else {
    ticketPrice = 10;
}


// Challenge 3: Weather Advisor
// TODO: Suggest activity based on temperature and conditions
// Hot (above 85): "Go swimming"
// Pleasant (60-85): "Go for a walk"  
// Cold (below 60): "Stay inside and watch a movie"
// If raining, always suggest "Stay inside" regardless of temperature
let temperature = 72;
let isRaining = false;
// Your code here
if (isRaining) {
    console.log("Stay inside");
}
else if (temperature > 85) {
    console.log("Go swimming");
} else if (temperature >= 60 && temperature <= 85) {
    console.log("Go for a walk");
} else {
    console.log("Stay inside and watch a movie");
}


// BONUS CHALLENGES
// 1. Create a simple game outcome decider (rock, paper, scissors)
let player1 = "rock";
let player2 = "scissors";

if (player1 === player2) {
    console.log("It's a tie!");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
) {
    console.log("Player 1 wins!");
} else {
    console.log("Player 2 wins!");
}

// 2. Design a shipping cost calculator based on weight and destination
let weight = 10; // in pounds
let destination = "international"; // "domestic" or "international"
let shippingCost;
if (destination === "domestic") {
    if (weight <= 5) {
        shippingCost = 5;
    } else if (weight <= 10) {
        shippingCost = 10;
    } else {
        shippingCost = 15;
    }
} else if (destination === "international") {
    if (weight <= 5) {
        shippingCost = 15;
    } else if (weight <= 10) {
        shippingCost = 25;
    } else {
        shippingCost = 35;
    }
}
console.log(`Shipping cost to ${destination} for ${weight} lbs: $${shippingCost}`); 
// 3. Build a password strength checker with multiple criteria
let password = "StrongPass123";
let isStrong = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
if (isStrong) {
    console.log("Password is strong.");
}
else {
    console.log("Password is weak. It should be at least 8 characters long, contain uppercase and lowercase letters, and include a number.");
}