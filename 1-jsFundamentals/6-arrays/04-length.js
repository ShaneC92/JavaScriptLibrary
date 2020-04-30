let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
console.log(colors.length);

console.log(colors.toString());

console.log(typeof colors);

/*
CHALLENGE
************

    -first check if you are working with an array
    -using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
    -using a method, pring the values of the newly arranged array
*/

//----EXAMPLE
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

console.log(colors instanceof Array);
colors.reverse();
colors.forEach (colors => console.log(colors));

//----EXAMPLE:
(colors instanceof Array) ? console.log(colors.reverse()) : console.log("Not an Array");
colors.forEach(name => console.log(name));

//----EXAMPLE:
if (colors instanceof Array) {
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color));
} else {
    console.log("Not an Array");
}


/*
    -Using the forEach method, capitalize the first letter of each color, then lower case the rest
*/

let colors = ["bLue", "grEen", "yellOw", "reD", "orAnge", "purPle"];

//----EXAMPLE:

colors.forEach(colors => console.log(colors[0].toUpperCase() + colors.slice(1).toLowerCase()));

//----EXAMPLE:

let correctSpelling = colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(newColor);
});