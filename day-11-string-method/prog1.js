//Find the length of a given string.
let str = "Hello, World!";
let length = str.length;
console.log("Length of the string is:", length);

//Convert a string to uppercase and lowercase.
let upperStr = str.toUpperCase();
let lowerStr = str.toLowerCase();
console.log("Uppercase:", upperStr);
console.log("Lowercase:", lowerStr);

//Trim extra spaces from a string.
let strWithSpaces = "   Hello, World!   ";
console.log("Original string with spaces:", `"${strWithSpaces}"`);
let trimmedStr = strWithSpaces.trim();
console.log("Trimmed string:", `"${trimmedStr}"`);