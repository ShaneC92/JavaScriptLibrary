// Challenge 2:
 
// Write a function that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print 'Fizz'.
// For multiples of 5, instead of the number, print 'Buzz'.
// For multiples of 3 AND 5, instead of the number, print 'Fizz Buzz'.
 
 
function fizzBuzz() {
    for (i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + 'Fizz Buzz');
        } else if (i % 5 == 0){
        console.log(i + 'Buzz');
        } else if (i % 3 == 0) {
        console.log(i + 'Fizz');
        }
    }
}

fizzBuzz();

function fizz() {
	for (I = 0; I <=100; I++) {

        if (I % 5 === 0) {
            console.log('Buzz');
        } else if (I % 3 === 0) {
            console.log('Fizz');
        } else if (I % 3 ===0 && I % 5 ===0) {
            console.log('FizzBuzz');
        } else {
            console.log(I);
        }
    }

}

fizz();

// Challenge 3:-----
 
// Write a function called isRightTriangle that accepts three parameters called: side, base, and hypotenuse.
// The function should return true if it forms a right triangle; it should return false if it doesn't.
// (HINT: pythagorean theorem: a**2 + b**2 = c**2).
 
// Example: 
// isRightTriangle(3,4,5) == true
// isRightTriangle(5,6,7) == false
 

function isRightTriangle(side, base, hypotenuse) {
    if (side**2 + base**2 == hypotenuse**2){
        return true;
    } else {
        return false;
    }
}


// Challenge 4:-----
 
// Create an object literal called netflix.
// It will have three properties: id, name, and seasonInfo.
// Id will be an integer and name will be a string.
// SeasonInfo will be an object which will have a property called episodeInfo, which is an array of more objects.
// Those objects have an episode number property and an episodeName property.
 
// You are welcome to fabricate the data.
 

let netflix = {
    id: 21,
    name: "The 100",
    seasonInfo: {
        episodeInfo: [
            {
            episodeName: "The Beginning:",
            episodeNumber: 1,
            runTime: 40
            }
        ]
    }
}
