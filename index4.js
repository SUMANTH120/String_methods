
const words = ["dog", "cat", "bird", "fish"];

// Function to reverse a string
function reverseString(word) {
    return word.split("").reverse().join("");
}

// Function to apply the reverseString function to each word in the array
function reverseWordsInArray(wordsArray) {
    return wordsArray.map(reverseString);
}

const reversedWords = reverseWordsInArray(words);

const reversedList = document.getElementById("reversedList");

reversedWords.forEach(reversedWord => {
    const listItem = document.createElement("li");
    listItem.textContent = reversedWord;
    reversedList.appendChild(listItem);
});
