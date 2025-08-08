// Week 1 Session 5: JavaScript Data Manipulation Project
// Student Name: [Your Name]
// Project Theme: [Choose one: Grade System, Library Catalog, Fitness Tracker, Recipe Manager, Budget Tracker]

// 1. Data Structure
// TODO: Modify this structure based on your chosen theme
let recipeData = {
    projectName: "Recipe Box",
    records: [
        {
            id: 1,
            name: "Chocolate Chip Cookies",
            category: "Dessert",
            prepTime: 10,
            cookTime: 15,
            servings: 24,
            ingredients: ["flour", "sugar", "butter", "chocolate chips"],
            difficulty: "easy"
        },
        {
            id: 2,
            name: "Porkchops with Rice",
            category: "Main Course",
            prepTime: 20,
            cookTime: 30,
            servings: 4,
            ingredients: ["pork chops", "rice", "soy sauce", "garlic"],
            difficulty: "medium"
        },
        {
            id: 3,
            name: "Chicken Sandwhich",
            category: "Lunch",
            prepTime: 30,
            cookTime: 40,
            servings: 2,
            ingredients: ["romaine lettuce", "Bread Roll", "Breadcrumbs", "Chicken Breast"],
            difficulty: "medium"
        },
        {
            id: 4,
            name: "Buffalo Chicken Drumsticks",
            category: "Main Course",
            prepTime: 15,
            cookTime: 20,
            servings: 3,
            ingredients: ["chicken drumsticks", "buffalo sauce", "potatoes", "Rice"],
            difficulty: "medium"
        },
        {
            id: 5,
            name: "Empanadas",
            category: "Appetizer",
            prepTime: 30,
            cookTime: 45,
            servings: 12,
            ingredients: ["Oil", "Cheese", "Dough"],
            difficulty: "easy"
        }
    ],
    metadata: {
        totalRecords: 0,
        lastUpdated: new Date().toISOString()
    }
};

// 2. Core Functions

// Add a new record
function addRecord(record) {
    // TODO: Generate unique ID
    const newId = recipeData.records.length ? Math.max(...recipeData.records.map(r => r.id)) + 1 : 1;
    record.id = newId;
    // TODO: Validate the record
    if (!validateRecord(record)) {
        console.error("Invalid record:", record);
        return;
    }
    // TODO: Add to projectData.records
    recipeData.records.push(record);
    // TODO: Update metadata
    recipeData.metadata.totalRecords = recipeData.records.length;
    recipeData.metadata.lastUpdated = new Date().toISOString();
}

// Remove a record by ID
function removeRecord(id) {
    // TODO: Find record by ID
    const index = recipeData.records.findIndex(record => record.id === id);
    if (index === -1) {
        console.error("Record not found with ID:", id);
        return;
    }
    // TODO: Remove from array
    recipeData.records.splice(index, 1);
    // TODO: Update metadata
    recipeData.metadata.totalRecords = recipeData.records.length;
    recipeData.metadata.lastUpdated = new Date().toISOString();
}

// Update an existing record
function updateRecord(id, updates) {
    // TODO: Find record by ID
    const record = recipeData.records.find(record => record.id === id);
    if (!record) {
        console.error("Record not found with ID:", id);
        return;
    }
    // TODO: Apply updates
    Object.assign(record, updates);
    // TODO: Update metadata
    recipeData.metadata.lastUpdated = new Date().toISOString();
}

// Search records based on criteria
function searchRecords(criteria) {
    // TODO: Filter records based on criteria
    return recipeData.records.filter(record => {
        return Object.keys(criteria).every(key => {
            if (Array.isArray(record[key])) {
                return record[key].includes(criteria[key]);
            }
            return record[key] === criteria[key];
        });
    });
    // TODO: Return matching records
    return recipeData.records.filter(record => {
        return Object.keys(criteria).every(key => {
            if (Array.isArray(record[key])) {
                return record[key].includes(criteria[key]);
            }
            return record[key] === criteria[key];
        });
    });
}

// Calculate statistics or summary
function generateSummary() {
    // TODO: Calculate relevant statistics
    const totalRecords = recipeData.records.length;
    const totalPrepTime = recipeData.records.reduce((sum, record) => sum + record.prepTime, 0);
    const totalCookTime = recipeData.records.reduce((sum, record) => sum + record.cookTime, 0);
    const averagePrepTime = totalRecords ? (totalPrepTime / totalRecords).toFixed(2) : 0;
    const averageCookTime = totalRecords ? (totalCookTime / totalRecords).toFixed(2) : 0;
    // TODO: Return summary object
    return {
        totalRecords,
        totalPrepTime,
        totalCookTime,
        averagePrepTime,
        averageCookTime
    };
}

// 3. Data Processing Functions

// Parse JSON string to object
function loadData(jsonString) {
    // TODO: Try to parse JSON
    try {
        const data = JSON.parse(jsonString);
    // TODO: Handle errors
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return;
    }
    // TODO: Validate data structure
    if (!data || !Array.isArray(data.records)) {
        console.error("Invalid data structure:", data);
        return;
    }
    // TODO: Map validated data to recipeData structure
    recipeData.records = data.records.map(record => {
        // TODO: Validate each record
        if (!validateRecord(record)) {
            console.error("Invalid record:", record);
            return null;
        }
        return {
            id: record.id,
            title: record.title,
            ingredients: record.ingredients,
            prepTime: record.prepTime,
            cookTime: record.cookTime
        };
    }).filter(record => record !== null);
    recipeData.metadata = {
        totalRecords: recipeData.records.length,
        lastUpdated: new Date().toISOString()
    };
}

// Convert object to JSON string
function saveData() {
    // TODO: Convert projectData to JSON
    const jsonString = JSON.stringify(recipeData, null, 2);
    // TODO: Return formatted string
    return jsonString;
}

// Validate a record before adding/updating
function validateRecord(record) {   
    // TODO: Check required fields
    const requiredFields = ['name', 'category', 'prepTime', 'cookTime', 'servings', 'ingredients', 'difficulty'];
    for (const field of requiredFields) {
        if (!record[field]) {
            console.error(`Missing required field: ${field}`);
            return false;
        }
    }
    // TODO: Validate data types
    if (typeof record.name !== 'string' || typeof record.category !== 'string' ||
        typeof record.prepTime !== 'number' || typeof record.cookTime !== 'number' ||
        typeof record.servings !== 'number' || !Array.isArray(record.ingredients) ||
        typeof record.difficulty !== 'string') {
        console.error("Invalid data types in record:", record);
        return false;
    }
    // TODO: Return true/false with error message
    return true;
}

// 4. Display Functions

// Display all records
function displayRecords() {
    // TODO: Format and display records
    console.log("=== Recipe Records ===");
    if (recipeData.records.length === 0) {
        console.log("No records found.");
        return;
    }
    recipeData.records.forEach(record => {
        console.log(`ID: ${record.id}, Name: ${record.name}, Category: ${record.category}, Prep Time: ${record.prepTime}, Cook Time: ${record.cookTime}, Servings: ${record.servings}, Difficulty: ${record.difficulty}`);
    });
}

// Display search results
function displaySearchResults(results) {
    // TODO: Format and display search results
    console.log("=== Search Results ===");
    if (results.length === 0) {
        console.log("No matching records found.");
        return;
    }
    results.forEach(record => {
        console.log(`ID: ${record.id}, Name: ${record.name}, Category: ${record.category}, Prep Time: ${record.prepTime}, Cook Time: ${record.cookTime}, Servings: ${record.servings}, Difficulty: ${record.difficulty}`);
    });
    // TODO: Handle case where no results found
    if (results.length === 0) {
        console.log("No matching records found.");
        return;
    }
    results.forEach(record => {
        console.log(`ID: ${record.id}, Name: ${record.name}, Category: ${record.category}, Prep Time: ${record.prepTime}, Cook Time: ${record.cookTime}, Servings: ${record.servings}, Difficulty: ${record.difficulty}`);
    }
    );
}

// Display summary statistics
function displaySummary(summary) {
    // TODO: Format and display summary data
    console.log("=== Summary Statistics ===");
    console.log(`Total Records: ${summary.totalRecords}`);
    console.log(`Total Prep Time: ${summary.totalPrepTime} minutes`);
    console.log(`Total Cook Time: ${summary.totalCookTime} minutes`);
    // TODO: Make numbers readable (e.g., averages, totals)
    console.log(`Average Prep Time: ${summary.averagePrepTime} minutes`);
    console.log(`Average Cook Time: ${summary.averageCookTime} minutes`);
    console.log(`Total Records: ${summary.totalRecords}`);
}

// 5. Main Program

function main() {
    console.log("=== [Ebelyn Suquilema] ===\n");

    // Initialize with sample data
    console.log("Loading initial data...");
    const initialData = JSON.stringify(recipeData, null, 2);
    loadData(initialData);

    // Test all functionality
    console.log("\nTesting core functions...\n");

    // Test 1: Display all records
    console.log("1. Displaying all records:");
    displayRecords();
    console.log("\nTotal Records:", recipeData.metadata.totalRecords);

    // Test 2: Add a new record
    console.log("\n2. Adding a new record:");
    let newRecord = {
        // Create a sample record based on your theme
        name: "Spaghetti Carbonara",
        category: "Main Course",
        prepTime: 10,
        cookTime: 20,
        servings: 4,
        ingredients: ["spaghetti", "eggs", "cheese", "bacon"],
        difficulty: "easy"
    };
    addRecord(newRecord);
    console.log("New record added:");
    displayRecords();
    console.log("\nTotal Records:", recipeData.metadata.totalRecords);

    // Test 3: Search for records
    console.log("\n3. Searching for records:");
    let searchResults = searchRecords(/* your criteria */);
    displaySearchResults(searchResults);

    // Test 4: Update a record
    console.log("\n4. Updating a record:");
    updateRecord(1, { /* your updates */ });
    displayRecords();
    console.log("\nTotal Records:", recipeData.metadata.totalRecords);

    // Test 5: Remove a record
    console.log("\n5. Removing a record:");
    removeRecord(1);
    displayRecords();
    console.log("\nTotal Records:", recipeData.metadata.totalRecords);

    // Test 6: Generate summary
    console.log("\n6. Generating summary:");
    let summary = generateSummary();
    displaySummary(summary);
    console.log("\nTotal Records:", recipeData.metadata.totalRecords);
}

// Start the program
main();

// 6. Test Cases
// TODO: Create at least 5 test cases demonstrating your functions work correctly
function runTests() {
    console.log("\n=== Running Tests ===");

    // Test 1: Add record
    console.log("=== Test 1: Add Record ===");
    let testRecord = {
        name: "Test Recipe",
        category: "Test Category",
        prepTime: 5,
        cookTime: 10,
        servings: 2,
        ingredients: ["test ingredient 1", "test ingredient 2"],
        difficulty: "easy"
    };
    // Test 2: Remove record
    console.log("=== Test 2: Remove Record ===");
    removeRecord(1);
    displayRecords();

    // Test 3: Update record
    console.log("=== Test 3: Update Record ===");
    updateRecord(1, { name: "Updated Recipe" });
    displayRecords();

    // Test 4: Search records
    console.log("=== Test 4: Search Records ===");
    let searchResults = searchRecords({ category: "Test Category" });
    displaySearchResults(searchResults);

    // Test 5: Generate summary
    console.log("=== Test 5: Generate Summary ===");
    let summary = generateSummary();
    displaySummary(summary);

    console.log("=== Tests Complete ===\n");
}

runTests();