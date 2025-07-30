// Week 1 Session 1: First Programs
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Program 1: Personal Information
// TODO: Create variables for your name, age, and city
let name = "Ebelyn"; // example name
let age = 18; // example age
let city = "New York"; // example city
// TODO: Display a formatted message like "Hello, I'm John, 25 years old from New York"
console.log(`Hello, I'm ${name}, ${age} years old from ${city}.`);

// Program 2: Basic Calculator
// TODO: Create two number variables
let num1 = 10; // example number 1
let num2 = 5; // example number 2

// TODO: Perform addition, subtraction, multiplication, division
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// TODO: Display all results with descriptive messages
console.log(`Sum: ${num1} + ${num2} = ${sum}`);
console.log(`Difference: ${num1} - ${num2} = ${difference}`);
console.log(`Product: ${num1} * ${num2} = ${product}`);
console.log(`Quotient: ${num1} / ${num2} = ${quotient}`);


// Program 3: Simple Conversion
// TODO: Convert miles to kilometers (1 mile = 1.60934 km)
let miles = 10; // example miles
let kilometers = miles * 1.60934;

// TODO: Display the result with a clear message
console.log(`${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`);


// BONUS PROGRAM: Create Your Own
// Choose one of these ideas or create your own:
// - Recipe converter (cups to grams)
// - Time converter (minutes to hours:minutes format)
// - Grade calculator (percentage to letter grade)
// Grade calculator (percentage to letter grade)
let percentage = 87; // example percentage
let letterGrade;

if (percentage >= 90) {
    letterGrade = "A";
} else if (percentage >= 80) {
    letterGrade = "B";
} else if (percentage >= 70) {
    letterGrade = "C";
} else if (percentage >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log(`A score of ${percentage}% is a letter grade of ${letterGrade}.`);