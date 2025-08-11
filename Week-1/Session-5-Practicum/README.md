# Week 1 Practicum: JavaScript Data Manipulation Project

## Project Information
- **Student Name**: [Ebelyn Suquilema]
- **Project Theme**: [Recipe Collection Manager]
- **Date**: [Aug 8]

## Project Description
My Recipe Collection Manager stores and organizes recipes I made during my time at the STEM Academy. It lets me add, delete, update, search, and get a summary of all my recipes.

## Data Structure
Each recipe has:

{
    id: 1,
    name: "Cookies", 
    category: "Dessert",
    prepTime: 10,
    cookTime: 15,
    servings: 24,
    ingredients: ["flour", "sugar"],
    difficulty: "easy"
}
```
There’s also metadata to store total recipes and last update time.

## Core Functions
List and briefly describe each function in your project:

1. `addRecord(record)`: Adds a recipe.
2. `removeRecord(id)`: Deletes a recipe by ID.
3. `updateRecord`: Changes a recipe’s details.
4. `searchRecords`: Finds recipes based on criteria.
5. `generateSummary`: Shows totals and averages.


## How to Use
Provide step-by-step instructions on how to use your application:

1. Run the program using `project-starter.js`
2. Choose from the menu options
3. The program will run all functions and show results in the console.


## Test Cases
Describe the test cases you've implemented:

1. Add a new recipe: Should appear in the list.
2. Remove a recipe: Should no longer appear.
3. Update cook time: Should change in the list.
4. Search “Chicken”: Shows only chicken recipes.
5. Summary: Shows total count and average times.






## Special Features
1. Automatic IDs.
2. Case-insensitive search.

## Challenges and Solutions
Making search work for partial matches: Fixed using .includes().

## Future Improvements
1. Add an interactive menu.
2. Save/load recipes from a file.