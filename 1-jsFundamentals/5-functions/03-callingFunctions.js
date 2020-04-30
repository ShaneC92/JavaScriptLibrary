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

function test() {
     for (i = 0; i <= 10; i++)
      console.log(i);
     if (i === 0)
      console.log(i + " this is even");
     else if (i % 2 === 0)
      console.log(i + " this is even");
     else 
      console.log(i + " this is odd");
}
  
  test();

  function test() {
    for (i = 0; i <= 10; i++)
        if (i === 0) {
      console.log(i + "\nthis is even");
        } else if (i % 2 === 0) {
      console.log(i + "\nthis is even");
        } else {
      console.log(i + "\nthis is odd");
        }
  }
  test();

  function test() {
    for (i = 0; i <= 10; i++){
        if (i === 0) {
      console.log(i);
      console.log("this is even");
        } else if (i % 2 === 0) {
      console.log(i);
      console.log("this is even");
        } else {
      console.log(i);
      console.log("this is odd");
        }
      }
  }

  test();




  function fizz() {
    for (i = 0; i <= 100; i++)
      if (i % 5 === 0) {
        console.log("Buzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 3 == 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else {
        console.log(i);
      }
  }
  fizz();
// ORDER MATTERS:
  function fizz() {

    for (i = 0; i <= 100; i++){
      if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
  }
  fizz();

  let fizzBuzz = () => {
      for(x = 0; x <= 100; x++) {
        if (x % 5 === 0 && x % 3 === 0){
          console.log("Fizz Buzz");
        } else if (x % 3 === 0) {
          console.log("Fizz");
        } else if (x % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(x);
        }
      }
  }
  fizzBuzz();