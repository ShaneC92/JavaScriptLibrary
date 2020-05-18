//Async function
//  -Alternate way to right .then .catch functions

async function myFn() {
  return "hello";
}

myFn().then(console.log);

//----
const myFn = async () => {};

//----
//----
async function myFn() {
  throw Error("this is a mistake");
}
async function myFn() {
  const response = await fetch("https://random.dog/woof.json");
  const json = await response.json();
  console.log(json);
}

myFn();

//----
//----

fetch("https://random.dog/woof.json")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

//----
//----

async function myFn() {
  const response = await fetch("https://random.dog/woof.json");
  const json = await response.json();
  return json;
}

myFn().then(console.log).catch(console.log);

//----
// Repl challenge

const myFn = async () => {
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/3");
  const json = await response.json();
  console.log(json);
  return "This should print last";
};

myFn().then(console.log);
