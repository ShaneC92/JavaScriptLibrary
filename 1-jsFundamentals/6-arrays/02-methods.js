let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for(let foodItem in food){
//     console.log(foodItem);
// }

// for(let foodItem of food){
//     console.log(foodItem);
// }

food.push("Pizza");

// Remove string (Start, numberDelete)
// food.splice(1, 2); 

//Optional third to add new String
food.splice(1, 2, "Tacos")
//console.log(food);

let removedFood = food.pop()
//console.log(removedFood);

food.unshift("Burritos");
console.log(food);