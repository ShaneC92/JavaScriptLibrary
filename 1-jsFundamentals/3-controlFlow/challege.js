//FizzBuzz

let FB = 22;

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log("Fizz Buzz");
} else if (FB % 3 == 0) {
    console.log("Fizz");
} else if (FB % 5 == 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");
}