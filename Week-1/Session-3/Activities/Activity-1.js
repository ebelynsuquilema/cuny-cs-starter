// Week 1 Session 3: Array Basics Practice

// Challenge 1: Shopping List
// TODO: Create an array with 3 grocery items
let shoppingList = ["Eggs", "Cereal", "Milk"];
// TODO: Add 2 more items to the end of the list
shoppingList.push("Corn", "Butter");
// TODO: Change the first item to something else
shoppingList[0] = "Potatoes";
// TODO: Print the final shopping list
console.log(shoppingList);


// Challenge 2: Grade Tracker
// TODO: Create an array of 5 test scores (numbers)
let testScores = [95, 67, 81, 54, 88];
// TODO: Calculate the average score
let averageScore = testScores.reduce((a, b) => a + b, 0) / testScores.length;
// TODO: Add a new test score and recalculate average
testScores.push(95);
averageScore = testScores.reduce((a, b) => a + b, 0) / testScores.length;


// Challenge 3: Daily Tasks
// TODO: Create an array of tasks (strings)
let tasks = ["Do homework", "Clean room", "Take a shower"];
// TODO: Remove the first task (mark as complete)
tasks.shift();
// TODO: Add a high-priority task to the beginning
tasks.unshift("Take out trash");
// TODO: Count how many tasks remain
let remainingTasks = tasks.length;
console.log("Remaining tasks: " + remainingTasks);


// BONUS CHALLENGES
// 1. Create a function to check if an item exists in the shopping list
function itemExists(item) {
    return shoppingList.includes(item);
}
console.log(itemExists("Milk")); // true
console.log(itemExists("Bread")); // false
// 2. Find the highest and lowest grades in the scores array
let highestScore = Math.max(...testScores);
let lowestScore = Math.min(...testScores);
console.log("Highest score: " + highestScore);
console.log("Lowest score: " + lowestScore);

// 3. Create a function to move a task to a different position
function moveTask(oldIndex, newIndex) {
    if (oldIndex < 0 || oldIndex >= tasks.length || newIndex < 0 || newIndex >= tasks.length) {
        console.log("Invalid task index");
        return;
    }
    const [task] = tasks.splice(oldIndex, 1);
    tasks.splice(newIndex, 0, task);
}