// Week 1 Session 1 Homework: Multi-Conversion Program
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Temperature Conversion
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
let temperatureCelsius = 25;
// Your code here
let fahrenheit = celsius * 9/5 + 32;
console.log("Temperature conversion: " + celsius + " °C = " + fahrenheit + " °F");
// Display the result
// console.log("Temperature conversion: ??? °C = ??? °F");
console.log("Temperature conversion: " + temperatureCelsius + " °C = " + fahrenheit + " °F");

// Task 2: Distance Conversion
// TODO: Convert miles to kilometers
// Formula: 1 mile = 1.60934 kilometers
let distanceMiles = 5;
// Your code here
let kilometers = distanceMiles * 1.60934;
console.log("Distance conversion: " + distanceMiles + " miles = " + kilometers + " kilometers");

// Display the result
// console.log("Distance conversion: ??? miles = ??? kilometers");
console.log("Distance conversion: " + distanceMiles + " miles = " + kilometers.toFixed(2) + " kilometers");


// Task 3: Currency Conversion
// TODO: Convert USD to EUR
// Use fixed rate: 1 USD = 0.92 EUR
let amountUSD = 100;
// Your code here
let conversionRate = 0.92;
let amountEUR = amountUSD * conversionRate;
console.log("Currency conversion: $" + amountUSD + " = €" + amountEUR.toFixed(2));

// Display the result
// console.log("Currency conversion: $??? = €???");
console.log("Currency conversion: $" + amountUSD + " = €" + amountEUR.toFixed(2));


// BONUS CHALLENGES
// 1. Add reverse conversions (Fahrenheit to Celsius, etc.)
// Reverse conversions

// Fahrenheit to Celsius
let temperatureFahrenheit = 77;
let celsiusFromF = (temperatureFahrenheit - 32) * 5/9;
console.log("Temperature conversion: " + temperatureFahrenheit + " °F = " + celsiusFromF.toFixed(2) + " °C");

// Kilometers to Miles
let distanceKilometers = 8.05;
let milesFromKm = distanceKilometers / 1.60934;
console.log("Distance conversion: " + distanceKilometers + " kilometers = " + milesFromKm.toFixed(2) + " miles");

// EUR to USD
let amountEUR2 = 92;
let usdFromEur = amountEUR2 / conversionRate;
console.log("Currency conversion: €" + amountEUR2 + ") = $" + usdFromEur.toFixed(2));
// 2. Format numbers to 2 decimal places; = $" + usdFromEur.toFixed(2));
console.log("Currency conversion: €" + amountEUR2.toFixed(2) + " = $" + usdFromEur.toFixed(2));
// 3. Create a function for each conversion
// 3. Create a function for each conversion

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5 + 32).toFixed(2);
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(2);
}

function milesToKilometers(miles) {
    return (miles * 1.60934).toFixed(2);
}

function kilometersToMiles(kilometers) {
    return (kilometers / 1.60934).toFixed(2);
}

function usdToEur(usd) {
    const rate = 0.92;
    return (usd * rate).toFixed(2);
}

function eurToUsd(eur) {
    const rate = 0.92;
    return (eur / rate).toFixed(2);
}

// Example usage:
console.log("25°C = " + celsiusToFahrenheit(25) + "°F");
console.log("77°F = " + fahrenheitToCelsius(77) + "°C");
console.log("5 miles = " + milesToKilometers(5) + " km");
console.log("8.05 km = " + kilometersToMiles(8.05) + " miles");
console.log("$100 = €" + usdToEur(100));
console.log("€92 = $" + eurToUsd(92));