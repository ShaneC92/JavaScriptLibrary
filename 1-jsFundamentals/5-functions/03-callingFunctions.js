function hi(){
    console.log("HI");
}

hi;
hi();
console.log(hi);
console.log(hi());

/*
Challenge:
    -create a function that, when invoked, lists out the numbers 1-10
*/

function num(){
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

num();

/*
Challenge:
    -Given the array, create a function that console.log's the values individually
*/

let arr = ["This", "is", "really", "cool"];

function call() {
    for (let item of arr) {
        console.log(item);
    }
}

call();