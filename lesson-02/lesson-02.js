let number = Number(prompt("enter a number"));

function numberChecker() {
	if(number >= 10) {
		return true;
	} else {
		return false;
	}
}

let result = numberChecker();
console.log(result);

const a = 1 + 8;
const b = 22 * 3; 
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
console.log(a, b, c, d, e);

const firstName = "Carlos"; 
const lastName = "Stevenson";
const currentYear = "1965"; 
const birthYear = "1948";
const fullName = firstName + " " + lastName;
const age = currentYear - birthYear;
const greeting = `Hello, my name is ${fullName} and I'm ${age} years old.`

console.log(greeting);
