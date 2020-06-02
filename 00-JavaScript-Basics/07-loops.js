//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//.
//.
//.
//console.log(100);

for (let i = 1; i <= 100; i += 1) { //line 1
    console.log(i); //line 2
}

for (var i = 1; i <= 10; i++) {
    console.log("number:", i);
}

for (let i = 20; i >= 0; i -=1) {
    console.log(i);
}

for (var i = 0; i <= 50; i+= 5) {
    console.log("number", i);
}

for (let i = 3; i <= 30; i +=5) {
    console.log(i);
}

function pacersWon(){
    console.log("Pacers won!!!!!!");
}
for (let i = 0; i < 5; i++) {
    pacersWon(); //calls pacersWon function.
}

for (let i = 5; i <= 100; i+=5) {
    console.log(i);
}
var i = 100
if(i = 100) {
    pacersWon();
}