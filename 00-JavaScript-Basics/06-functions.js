//1    //2

function hello() {
    //3
    console.log("Hello World!");
}

hello(); // invokes the function hello

hello();
hello();
hello();

function pacersWon() {
    console.log("Pacers won!");
}

pacersWon();
pacersWon();

function bottleCapper(bottle, cap) {
    return bottle + cap;
}

bottleCapper("green bottle", "white cap");

function numberEntered(num) {
    console.log("The number you entered was: ", num);
}
numberEntered(2);
numberEntered(3);
numberEntered(5);

function addAnyTwoNumbers(x, y) {
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(5, 10);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(4, 6);
subtractTwoNumbers(9, 3);

function getMyBattingAverage(atBats, numberOfHits) {
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); // = 0.364




function fullName(first, last) {
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("Paul", "O'Connor"));


//Write a function to calculate and return the totalPrice of a quantity of products, including 7% tax.

function calculatePriceIndiana(quantity, price) {
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; //or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));