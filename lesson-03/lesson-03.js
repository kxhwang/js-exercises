function add7(num) {
    return num + 7;
}

function multiply(a, b) {
    return a * b;
}

function capitalized(word){
   let formatedWord = word.toLowerCase()
   formatedWord = formatedWord.charAt(0).toUpperCase() + formatedWord.substring(1, formatedWord.length);
    return formatedWord;
}
function lastLetter(word){
    return word.charAt(word.length - 1);
}


console.log(add7(18));
console.log(multiply(3, 9));
console.log(capitalized("BEAUtiful!"));
console.log(lastLetter("Maze"));