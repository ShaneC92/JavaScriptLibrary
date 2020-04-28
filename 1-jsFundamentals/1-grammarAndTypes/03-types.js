//Boolean
let on = true;
console.log(typeof on);

let off = false;


//Null - null is an empty value. Think of it as an empty container: nothing is in there, but it still exists as a space to fill.

let empty = null;
console.log(empty);


//Undefined - default value when a variable is initialized

let undef = undefined;
let correct;

console.log(undef, correct);

//Numbers

let degrees = 90;
console.log(degrees);

let practice = 999999999999999;
console.log(practice);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(typeof aNumber);

//Strings - strings are datatypes used to represent text and are either wrapped in single quotes(''), double quotes(""), or string interpalations(`

let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second);

let third = 1050 + "100";
console.log(third);

//Objects - objects are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",
    rings: 1,
    cloak: true,
}

console.log(frodo);

//Arrays - arrays are containers that hold lists of items
/*

    let list = [    "item1",     "items2",       "item3"];
        (1)           (2)           (3)             

    1- name of array
    2- arrays are denoted by square brackets
    3- notice each value is seperated by a coma   
*/
//               (1)    (2)  (3)
let burritos = ["large", 4, true];
console.log(burritos);
console.log(typeof burritos);

//Challenge

let firstName = "Shane";
let lastName = "Cox";
var houseNumber = 9898;
let street = "Adventure Pass";
let city = "Noblesville";
let state = "Indiana";
const zipcode = "46060";

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);
console.log(`${firstName} ${lastName},  ${houseNumber}`);

let myName = "Shane";
console.log(myName.length); //counts spaces as well

console.log(myName.toUpperCase());

let home = "My home is greenwood";
console.log(home.includes("greenwood"));

//Challenge

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(" "));

