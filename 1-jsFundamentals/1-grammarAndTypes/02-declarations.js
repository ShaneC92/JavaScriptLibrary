// variable = data storage

let a = 2;

      let      b       =       1
/*    (1)     (2)     (3)     (4)

1-keyword
2-variable name
3-assignment operator
4-variable value

*/


console.log(a + b );

/*
    notes on variables:
        -a variable must begin with a letter, underscore, or dollar sign
        -numbers may follow the above characters, but cannot come first
        -javascript is case sensitive - 'hello' and 'Hello' are different variables
        -no spaces are allowed in variable names
        -camelCase is the best practice for naming variables
            camelCaseExample, snake_case, PascalCase

*/

var c = 1;
let d = 2;
const e = 3; // value must remain constant

/*  declaration are the LEFT side of a variable
        -it is simply: let x
    
    initializations are on the Right side of a variable
        -it sets the Value of the variable
        -it incorporates the variable name, the assignment operator, and the value

*/
let x = 20;
console.log(x);

x = 10;
console.log(x)

x = 33;
console.log(x)

let today = "First day"
let mood = "Happy"
console.log(today, mood);

console.log("Today is the", today, "I am", mood);

