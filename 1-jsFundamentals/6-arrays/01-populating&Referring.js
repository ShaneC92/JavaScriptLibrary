//   (1)  (2)   (3)
let list = [ "items1",   "item2",    "item3",];

/*

1: variable name holding the array
2: arrays are denoted by square brackets
3: each item in the array must be seperated by a comma

*/

//              (0)      (1)       (2)
let fruit = ["orange", "banana", "apple"];
console.log(fruit[0]);
console.log(fruit[1]);


let students = [
    "Mitchell",
    "bill",
    "Brittany",
    23,
    true,
    ["Hustin", "Amanda", "John", [20, true, "slayde"]]
]
//                             (Object)
console.log(students instanceof Array);
console.log(students[5][1])
console.log(students[5][3][2])

