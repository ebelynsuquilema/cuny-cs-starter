// Week 1 Session 1 Homework: Multi-Conversion Program
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Temperature Conversion
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
let temperatureCelsius = 25;
// Your code here
let temperatureFahrenheit = temperatureCelsius * (9 / 5) + 32;

// Display the result
// console.log("Temperature conversion: ??? °C = ??? °F");
console.log(`Temperature conversion: ${temperatureCelsius} °C = ${temperatureFahrenheit.toFixed(2)} °F`);

// Task 2: Distance Conversion
// TODO: Convert miles to kilometers
// Formula: 1 mile = 1.60934 kilometers
let distanceMiles = 5;
// Your code here
let distanceKilometers = distanceMiles * 1.60934;

// Display the result
// console.log("Distance conversion: ??? miles = ??? kilometers");
console.log(`Distance conversion: ${distanceMiles} miles = ${distanceKilometers.toFixed(2)} kilometers`);


// Task 3: Currency Conversion
// TODO: Convert USD to EUR
// Use fixed rate: 1 USD = 0.92 EUR
let amountUSD = 100;
// Your code here
let amountEUR = amountUSD * 0.92;

// Display the result
// console.log("Currency conversion: $??? = €???");
console.log(`Currency conversion: $${amountUSD} = €${amountEUR.toFixed(2)}`);


// BONUS CHALLENGES
// 1. Add reverse conversions (Fahrenheit to Celsius, etc.)
let reverseTemperatureFahrenheit = 77; // Example value
let reverseTemperatureCelsius = (reverseTemperatureFahrenheit - 32) * (5 / 9);
console.log(`Reverse temperature conversion: ${reverseTemperatureFahrenheit} °F = ${reverseTemperatureCelsius.toFixed(2)} °C`);

let kilometersValue = 8.05;
let milesValue = kilometersValue / 1.60934;
console.log(`Reverse conversion: ${kilometersValue} kilometers = ${milesValue.toFixed(2)} miles`);

let eurValue = 92;
let usdValue = eurValue / 0.92;
console.log(`Reverse conversion: €${eurValue} = $${usdValue.toFixed(2)}`);
// 2. Format numbers to 2 decimal places
let number = 3.14159;
console.log(number.toFixed(2));
// 3. Create a function for each conversion
function celsiusToFahrenheit(celsius) {
return celsius * (9 / 5) + 32;
}

function milesToKilometers(miles) {
return miles * 1.60934;
}

function usdToEur(usd) {
return usd * 0.92;
}
