let word = prompt("Please enter a word that has 2 or more letters in it")
let length = word.length
let check = word[0].indexOf("a","A","e","E","i","I","o","O","u","U")
let check1 = word[1].indexOf("a","A","e","E","i","I","o","O","u","U")
if (length < 2) {
  prompt("Error, please enter a word longer than 1 character")
};

if (check > -1) {
  console.log(word + "way")
} else if (check1 === -1) {
  console.log(word.substr(2) + "ay")
} else {
  console.log(word.substr(1) + "ay")
}