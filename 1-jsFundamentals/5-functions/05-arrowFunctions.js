// variable     fat arrow
    let hi =    ()  =>  {
        console.log("hi");
    }

// arrow functions were introduced in ES6. They are basically a more concise way to write function expressions - NOT declaractions
// this means aroow functions do not get hoisted

//BLOCK BODY
let hi = () => {
    console.log("hi");
    //lots of code goes here
    
    //return goes here
}
//NOTE: block body arrow functions must have a return (if you want to get back information) in the body of the function
// (return must be inside the curly braces)

//CONCISE BODY
let hi = () => console.log("hi");
//NOTE: concise body arrow functions return by default; they automatically give back the information

let greeting = name => {
    console.log(`Greetings, ${name}`);
}

greeting("Shane");

let greeting = (firstName, lastName) => {
    console.log(`Greetings, ${firstName} ${lastName}`);
}
//NOTE: when you have multiple parameters, you must include parenthesis; however when you have a single parameter the parenthesis are optional
greeting("Shane", "Cox");

