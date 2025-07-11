/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5  + ' ' + s3 + ' ' + s2 + ' ' + s3 + ' ' + s4

// Print out the concatenated string
console.log(tongueTwister)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let result = part1.slice(0, 3) + part1[3].toUpperCase() + part2.slice(0, 5) + part2[5].toUpperCase();

// Print the cameLtaiL-formatted string

console.log(result)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipAmount = billTotal * 1.15

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let number
number = Math.random()
number = Math.floor(Math.random()*10) + 1 ;

// Print the generated random number

console.log(number)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:

const expression1 = a && b;  // false (AND at least one false)

const expression2 = a || b; // true (at least one true OR)

const expression3 = !a && b; // false (both false with AND)

const expression4 = !(a && b); // true (inside (false) but it negates it)

const expression5 = !a || !b; // true (both negates but still 1 true OR)

const expression6 = !(a || b); // false (true inside but negates outside () )

const expression7 = a && a;  // true (AND both true)

console.log("Results:")
console.log('1', expression1)
console.log('2', expression2)
console.log('3', expression3)
console.log('4', expression4)
console.log('5', expression5)
console.log('6', expression6)
console.log('7', expression7)