let listTitle = document.getElementById("listTitle");
console.log(listTitle);

let listItem = document.querySelector("ul li");
console.log(listItem);

listTitle.style.textAlign = "center";

listItem.style.color = "red";

let grocery = document.getElementsByClassName("groceryItem");

console.log(grocery);
console.log(grocery[2]);
console.log(grocery.item(2));

let listItems = document.getElementsByTagName("li");
console.log(listItems);

let unorderedListItems = document.querySelectorAll("ul li");
console.log(unorderedListItems);

console.log(document.body.childNodes);
console.log(document.body.children);

let listDiv = document.getElementById("list");

console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling.nextSibling);

// Challenge -- Select the input box and assign it to a variable called todoTitle

let todoTitle = document.getElementById("listInput");
console.log(todoTitle);

// Challenge -- Underline unorderedListItems

document.getElementsByClassName("listItem")[4].innerText = "Visit Grindelwald";
//Moondew Drops
document.getElementsByClassName("groceryItem")[0].innerText = "Moondew Drops";

//                                                            Callback Function
document.getElementById("clickMe").addEventListener("click", (event) => {
  event.target.style.backgroundColor = "lightblue";
});

document.getElementById("listInput").addEventListener("keyup", (event) => {
  console.log(event.target.value);
});

let newGroceryItem = document.createElement("li");
console.log(newGroceryItem);

let groceryList = document.getElementById("groceryList");

groceryList.appendChild(newGroceryItem);
newGroceryItem.innerText = "Ginger Root";

unorderedListItems = document.querySelectorAll("ul li");

for (tag of unorderedListItems) {
  tag.style.textDecoration = "underline";
  tag.style.fontSize = "20px";
}
