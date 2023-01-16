let word = prompt("Please enter a word that has 2 or more letters in it")
let length = word.length
let vowels = "AaEeIiOoUu"
let check = vowels.indexOf(word[0]);
let check1 = vowels.indexOf(word[1]);
if (length < 2) {
  prompt("Error, please enter a word longer than 1 character")
};

if (check > -1) {
  console.log(word + "way")
} else if (check1 === -1) {
  console.log(word.substr(2) + word.slice(0,2) + "ay")
} else {
  console.log(word.substr(1) + word.slice(0,1) + "ay")
}