// Sample array of strings
const strings = ["hello", "world", "javascript", "dom"];

// Convert all strings to uppercase using map()
const capitalizedStrings = strings.map(string => string.toUpperCase());

// Join the array into a single string separated by spaces
const capitalizedText = capitalizedStrings.join(" ");

// Get reference to the paragraph element in the DOM
const paragraph = document.getElementById("capitalizedText");

// Set the text content of the paragraph to the capitalized text
paragraph.textContent = capitalizedText;
