// Week 1 Session 1: Variables and Data Types Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Create variables for different data types
// TODO: Create a string variable for your name
const fname = "Ebelyn"; 
console.log(typeof fname); 

// TODO: Create a number variable for your age
const age = 18;
console.log(typeof age);

// TODO: Create a boolean variable for whether you're a student
const isStudent = true;
console.log(typeof isStudent);  

// Task 2: Print variables to console
// TODO: Use console.log() to display each variable
console.log("Name:", fname);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Task 3: Experiment with typeof operator
// TODO: Check the type of each variable using typeof
typeof fname; // string
typeof age; // number   
typeof isStudent; // boolean

// BONUS CHALLENGES
// 1. Create a variable that holds your favorite quote
const favoriteQuote = "The only limit to our realization of tomorrow is our doubts of today.";
console.log("Favorite Quote:", favoriteQuote);
// 2. Create a variable that calculates days until the weekend
const today = new Date();
const daysUntilWeekend = (6 - today.getDay() + 7) % 7
// 3. Create a variable that checks if today is a weekday
const isWeekday = today.getDay() < 5; // 0-4 are weekdays
console.log("Days until weekend:", daysUntilWeekend);
console.log("Is today a weekday?", isWeekday);