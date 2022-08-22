/*
* Stacks
* */

const letters = [];
const word = "Greetings";
let revWord = "";


//lets put some leters in the stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

/*
lets check whats in our stack
console.log(letters);
*/
//lets pop letters in reverse order from the stack
for (let i = 0; i < word.length; i++) {
    revWord += letters.pop();
}
if (word === revWord) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is not a palindrome");
}
