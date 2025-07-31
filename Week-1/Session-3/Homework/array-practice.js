// Week 1 Session 3 Homework: Array Practice

// Task 1: Find Largest Number
// TODO: Write a function to find the largest number in an array
function findLargest(numbers) {
    // Your code here
    let largest = numbers[0]; // Assume the first number is the largest
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; // Update largest if current number is greater
        }
    }
    return largest; // Return the largest number found
}

// Test your function
let testArray1 = [5, 2, 9, 1, 7, 6];
console.log("Largest number:", findLargest(testArray1)); // Should print 9


// Task 2: Reverse Array
// TODO: Write a function to reverse an array without using .reverse()
function reverseArray(arr) {
    // Your code here
}

// Test your function
let testArray2 = ["a", "b", "c", "d"];
console.log("Reversed array:", reverseArray(testArray2)); // Should print ["d", "c", "b", "a"]


// Task 3: Remove Duplicates
// TODO: Write a function to remove duplicates from an array
function removeDuplicates(arr) {
    // Your code here
}

// Test your function
let testArray3 = [1, 2, 2, 3, 4, 4, 5];
console.log("No duplicates:", removeDuplicates(testArray3)); // Should print [1, 2, 3, 4, 5]


// BONUS CHALLENGES
// 1. Find the second largest number in an array
// 2. Merge two sorted arrays into one sorted array
// 3. Rotate an array by n positions to the right