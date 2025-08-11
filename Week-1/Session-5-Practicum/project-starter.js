// Week 1 Session 5: JavaScript Data Manipulation Project
// Student Name: [Your Name]
// Project Theme: Recipe Manager

// 1. Data Structure
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
            name: "Chicken Sandwich",
            category: "Lunch",
            prepTime: 30,
            cookTime: 40,
            servings: 2,
            ingredients: ["romaine lettuce", "bread roll", "breadcrumbs", "chicken breast"],
            difficulty: "medium"
        },
        {
            id: 4,
            name: "Buffalo Chicken Drumsticks",
            category: "Main Course",
            prepTime: 15,
            cookTime: 20,
            servings: 3,
            ingredients: ["chicken drumsticks", "buffalo sauce", "potatoes", "rice"],
            difficulty: "medium"
        },
        {
            id: 5,
            name: "Empanadas",
            category: "Appetizer",
            prepTime: 30,
            cookTime: 45,
            servings: 12,
            ingredients: ["oil", "cheese", "dough"],
            difficulty: "easy"
        }
    ],
    metadata: {
        totalRecords: 5,
        lastUpdated: new Date().toISOString()
    }
};

// Utility: update metadata
function updateMetadata() {
    recipeData.metadata.totalRecords = recipeData.records.length;
    recipeData.metadata.lastUpdated = new Date().toISOString();
}

// 2. Core Functions

function addRecord(record) {
    const newId = recipeData.records.length > 0
        ? Math.max(...recipeData.records.map(r => r.id)) + 1
        : 1;
    record.id = newId;

    if (!validateRecord(record)) return;

    recipeData.records.push(record);
    updateMetadata();
}

function removeRecord(id) {
    const index = recipeData.records.findIndex(r => r.id === id);
    if (index !== -1) {
        recipeData.records.splice(index, 1);
        updateMetadata();
    } else {
        console.log(`Record with ID ${id} not found.`);
    }
}

function updateRecord(id, updates) {
    const record = recipeData.records.find(r => r.id === id);
    if (!record) {
        console.log(`Record with ID ${id} not found.`);
        return;
    }
    Object.assign(record, updates);
    updateMetadata();
}

function searchRecords(criteria) {
    return recipeData.records.filter(record =>
        Object.entries(criteria).every(([key, value]) =>
            typeof value === "string"
                ? record[key].toString().toLowerCase().includes(value.toLowerCase())
                : record[key] === value
        )
    );
}

function generateSummary() {
    const totalRecipes = recipeData.records.length;
    const avgPrepTime = (recipeData.records.reduce((sum, r) => sum + r.prepTime, 0) / totalRecipes).toFixed(1);
    const avgCookTime = (recipeData.records.reduce((sum, r) => sum + r.cookTime, 0) / totalRecipes).toFixed(1);

    return {
        totalRecipes,
        avgPrepTime: `${avgPrepTime} min`,
        avgCookTime: `${avgCookTime} min`
    };
}

// 3. Data Processing Functions

function loadData(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        if (parsed.records && Array.isArray(parsed.records)) {
            recipeData = parsed;
            updateMetadata();
        } else {
            console.log("Invalid data structure.");
        }
    } catch (err) {
        console.log("Error parsing JSON:", err.message);
    }
}

function saveData() {
    return JSON.stringify(recipeData, null, 2);
}

function validateRecord(record) {
    const requiredFields = ["name", "category", "prepTime", "cookTime", "servings", "ingredients", "difficulty"];
    for (let field of requiredFields) {
        if (!(field in record)) {
            console.log(`Missing field: ${field}`);
            return false;
        }
    }
    return true;
}

// 4. Display Functions

function displayRecords() {
    console.log("\nCurrent Recipes:");
    recipeData.records.forEach(r => {
        console.log(`#${r.id}: ${r.name} (${r.category}) - Prep: ${r.prepTime} min, Cook: ${r.cookTime} min`);
    });
}

function displaySearchResults(results) {
    if (results.length === 0) {
        console.log("No matching records found.");
    } else {
        console.log("\nSearch Results:");
        results.forEach(r => console.log(`#${r.id}: ${r.name} - ${r.category}`));
    }
}

function displaySummary(summary) {
    console.log("\nSummary:");
    console.log(`Total Recipes: ${summary.totalRecipes}`);
    console.log(`Average Prep Time: ${summary.avgPrepTime}`);
    console.log(`Average Cook Time: ${summary.avgCookTime}`);
}

// 5. Main Program
function main() {
    console.log("=== Recipe Box ===\n");

    // Test 1: Display all records
    displayRecords();

    // Test 2: Add a new record
    console.log("\nAdding a new record:");
    addRecord({
        name: "Avocado Toast",
        category: "Breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        ingredients: ["bread", "avocado", "salt", "pepper"],
        difficulty: "easy"
    });
    displayRecords();

    // Test 3: Search for records
    console.log("\nSearching for 'Chicken':");
    const searchResults = searchRecords({ name: "Chicken" });
    displaySearchResults(searchResults);

    // Test 4: Update a record
    console.log("\nUpdating record #1:");
    updateRecord(1, { cookTime: 20 });
    displayRecords();

    // Test 5: Remove a record
    console.log("\nRemoving record #2:");
    removeRecord(2);
    displayRecords();

    // Test 6: Generate summary
    console.log("\nGenerating summary:");
    displaySummary(generateSummary());
}

// Start program
// main(); // Commented out to avoid interference with web page

// 6. Test Cases
function runTests() {
    console.log("\n=== Running Tests ===");
    // Add
    addRecord({
        name: "Pasta",
        category: "Dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 2,
        ingredients: ["pasta", "tomato sauce"],
        difficulty: "easy"
    });
    console.assert(recipeData.records.some(r => r.name === "Pasta"), "Test Add Failed");

    // Remove
    removeRecord(3);
    console.assert(!recipeData.records.some(r => r.id === 3), "Test Remove Failed");

    // Update
    updateRecord(4, { servings: 5 });
    console.assert(recipeData.records.find(r => r.id === 4).servings === 5, "Test Update Failed");

    // Search
    const results = searchRecords({ difficulty: "easy" });
    console.assert(results.length > 0, "Test Search Failed");

    // Summary
    const summary = generateSummary();
    console.assert(typeof summary.totalRecipes === "number", "Test Summary Failed");

    console.log("=== Tests Complete ===\n");
    
}


// Uncomment to run tests
// runTests();

// 7. UI Interaction Functions for HTML

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function searchRecipes() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        const results = searchRecords({ name: searchTerm });
        displayRecipeGrid(results);
    } else {
        displayRecipeGrid(recipeData.records);
    }
}

function filterRecipes() {
    const categoryFilter = document.getElementById('category-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    
    let filteredRecipes = recipeData.records;
    
    if (categoryFilter) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === categoryFilter);
    }
    
    if (difficultyFilter) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty === difficultyFilter);
    }
    
    displayRecipeGrid(filteredRecipes);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const ingredients = formData.get('ingredients').split('\n').map(item => item.trim()).filter(item => item);
    
    const newRecipe = {
        name: formData.get('name'),
        category: formData.get('category'),
        prepTime: parseInt(formData.get('prepTime')),
        cookTime: parseInt(formData.get('cookTime')),
        servings: parseInt(formData.get('servings')),
        difficulty: formData.get('difficulty'),
        ingredients: ingredients
    };
    
    addRecord(newRecipe);
    displayRecipeGrid(recipeData.records);
    updateStatistics();
    event.target.reset();
    alert('Recipe added successfully!');
}

function displayRecipeGrid(recipes) {
    const grid = document.getElementById('recipe-grid');
    if (!grid) return;
    
    grid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card">
            <h3>${recipe.name}</h3>
            <p class="category">${recipe.category}</p>
            <div class="recipe-details">
                <span>Prep: ${recipe.prepTime}min</span>
                <span>Cook: ${recipe.cookTime}min</span>
                <span>Serves: ${recipe.servings}</span>
                <span class="difficulty difficulty-${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <div class="ingredients">
                <strong>Ingredients:</strong>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <button onclick="removeRecipe(${recipe.id})" class="delete-btn">Delete</button>
        </div>
    `).join('');
}

function removeRecipe(id) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        removeRecord(id);
        displayRecipeGrid(recipeData.records);
        updateStatistics();
    }
}

function updateStatistics() {
    const statsGrid = document.getElementById('stats-grid');
    if (!statsGrid) return;
    
    const summary = generateSummary();
    const categories = [...new Set(recipeData.records.map(r => r.category))];
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <h3>Total Recipes</h3>
            <p class="stat-value">${summary.totalRecipes}</p>
        </div>
        <div class="stat-card">
            <h3>Avg Prep Time</h3>
            <p class="stat-value">${summary.avgPrepTime}</p>
        </div>
        <div class="stat-card">
            <h3>Avg Cook Time</h3>
            <p class="stat-value">${summary.avgCookTime}</p>
        </div>
        <div class="stat-card">
            <h3>Categories</h3>
            <p class="stat-value">${categories.length}</p>
        </div>
    `;
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', function() {
    displayRecipeGrid(recipeData.records);
    updateStatistics();
});
