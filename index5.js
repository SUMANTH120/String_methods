// Sample array of words
const words = ["apple", "banana", "grape"];

// Function to count vowels in a word
function countVowels(word) {
    const vowels = word.match(/[aeiou]/gi); // Match vowels (case-insensitive)
    return vowels ? vowels.length : 0; // Return the length of matched vowels or 0 if no match
}

// Function to create a string with the word and its vowel count
function wordWithVowelCount(word) {
    const vowelCount = countVowels(word);
    return `${word} (${vowelCount} vowels)`;
}

// Get the words with vowel counts using map()
const wordsWithVowelCounts = words.map(wordWithVowelCount);

// Get reference to the unordered list in the DOM
const vowelList = document.getElementById("vowelList");

// Create list items and append them to the unordered list
wordsWithVowelCounts.forEach(wordWithVowelCount => {
    const listItem = document.createElement("li"); // Create a new <li> element
    listItem.textContent = wordWithVowelCount; // Set the text content to the word and vowel count
    vowelList.appendChild(listItem); // Append the <li> to the <ul>
});
