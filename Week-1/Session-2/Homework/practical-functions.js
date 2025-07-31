// 1. Format a phone number (e.g., “6462919355” into “(646) 291-9355)
function formatPhoneNumber(number) {
    const cleaned = number.replace(/\D/g, "");
    if (cleaned.length !== 10) return "Invalid phone number";
    return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
}

// 2. Validate an email address format
function validateEmail(email) {
    // Simple regex for demonstration
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// 3. Calculate age from birth year
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Example usage:
console.log(formatPhoneNumber("6462919355")); // (646) 291-9355
console.log(formatPhoneNumber("123456789")); // Invalid phone number
console.log(formatPhoneNumber("646-291-9355")); // (646) 291-9355
console.log(validateEmail("test@example.com")); // true
console.log(calculateAge(2000)); // e.g., 25 if current