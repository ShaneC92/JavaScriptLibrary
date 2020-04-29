let student = {
    name: "Shane",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "british shorthair", "burmese", "main coon", "rag doll"];

for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

/*Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name.
*/

let name = "sHaNe"
let capName;

for (let l in name) {
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}

console.log(capName);