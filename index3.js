// Sample array of words
const words = ["I", "am", "learning", "JavaScript", "today"];

// Join the words into a single sentence
const sentence = words.join(" ") + "."; // Adding a period at the end for the sentence

// Get reference to the div element in the DOM
const sentenceDiv = document.getElementById("sentence");

// Set the text content of the div to the sentence
sentenceDiv.textContent = sentence;
