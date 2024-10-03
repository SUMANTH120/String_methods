
const words = ["apple", "banana", "grape", "watermelon", "kiwi", "strawberry"];

const longWords = words.filter(word => word.length > 5);

const wordList = document.getElementById("wordList");

longWords.forEach(word => {
    const listItem = document.createElement("li"); 
    listItem.textContent = word; 
    wordList.appendChild(listItem);
});
