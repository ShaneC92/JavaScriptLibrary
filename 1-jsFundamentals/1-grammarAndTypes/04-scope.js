let x = 12;
​
function scope() {
    let x = 33;
    console.log(x);
}
​
scope();
console.log(x);
​
let y = 12;
​
function scope2() {
    y = 33;
    console.log(y);
}
​
scope2();
console.log(y);
​
var x = 12;
​
function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}
​
varTest();
console.log(x);

var x = 12;

function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x)
}

varTest();
console.log(x);