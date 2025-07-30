// Week 1 Session 2: Function Creation Practice

// Function 1: Greeting Generator
// TODO: Create function that greets user by name and time of day
// Morning: "Good morning, [name]!"
// Afternoon: "Good afternoon, [name]!"
// Evening: "Good evening, [name]!"
function greetUser(name, hour) {
    // Your code here
    if (hour < 12) {
        return "Good morning, " + name + "!";
    }
    else if (hour < 18) {
        return "Good afternoon, " + name + "!";
    }
    else {
        return "Good evening, " + name + "!";
    }       
}

// Test your function
console.log(greetUser("Alice", 9));   // Should print "Good morning, Alice!"
console.log(greetUser("Bob", 15));    // Should print "Good afternoon, Bob!"
console.log(greetUser("Carol", 20));  // Should print "Good evening, Carol!"


// Function 2: Bill Calculator
// TODO: Create function to calculate total with tip
// Takes bill amount and tip percentage, returns total
// Your code here
function calculateTotal(billAmount, tipPercent) {
    return billAmount + (billAmount * tipPercent / 100);
}

// Test your function
console.log(calculateTotal(50, 20));    // Should print 60
console.log(calculateTotal(100, 15));   // Should print 115


// Function 3: Password Validator
// TODO: Create function to check if password meets criteria
// At least 8 characters long and contains a number
function isValidPassword(password) {
    // Your code here
    if (password.length < 8) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    return true;
}

// Test your function
console.log(isValidPassword("password123"));  // Should print true
console.log(isValidPassword("short"));        // Should print false
console.log(isValidPassword("nonnumeric"));   // Should print false


// BONUS FUNCTIONS
// 1. Create a function to convert text to title case
function toTitleCase(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
// 2. Create a function to check if an email address looks valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// 3. Create a function to generate a random password
function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}