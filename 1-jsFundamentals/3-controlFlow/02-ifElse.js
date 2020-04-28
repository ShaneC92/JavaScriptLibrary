let weather = 75;

if (weather < 70) {
    console.log("Wear a jacket.");
} else {
    console.log("No jacket necessary");
}


let name = "Shane";

if (name == "Shane") {
    console.log(`Hello, my name is ${name}`);
} else {
    console.log("Hello, what is your name?");
}


if (name == "Shane") {
    console.log("Hello, is your name " + name);
}
/*
Bronze: 
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
*/
let name = "zAchARy"
//"Zachary"

if (name[0] === name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log("Hey, the string isn't written correctly.")
}

/*
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
*/
let name = "zAchARy"

if (name[0] === name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}

/*
Gold:
    If the first letter of a string is uppercase, console.log that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
let name = "zAchARy"

if (name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}




//ElseIf statement

let age = 22;

if (age >= 25) {
    console.log("You can rent a care!");
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
} else {
    conesole.log("Sorry, you're too young to do anything.");
}
