let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

// food.forEach(foodItem => console.log(foodItem));

food.forEach((foodItem, index) => console.log(index, foodItem));

/*
CHALLENGE
***********

    -(Go look at the MDN docs to remind you);
    -Create an array containing movies
    -use .forEach() to list your movies
    -add another movie at the end
    -and replace one of your existing movies with another one
*/

let movies = ["Transformers", "300", "The Lord of the Rings: The Two Towers"];

//movies.forEach(movieList => console.log(movieList));
movies.push("The Lord of the Rings: The Return of The King");
movies.splice(1, 1, "The Lord of The Rings: The Fellowship of The Ring");
//console.log(movies);
movies.forEach(movieList => console.log(movieList));
movies.forEach((movieList, i) => console.log(i, movieList));