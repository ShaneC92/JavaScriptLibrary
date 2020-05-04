// let movies = {
//   nameOfMovie: "Transformers",
//   runTime: 144,
//   genre: "PG-13",
//   characters: {
//     character1: [
//       name:
//       "Sam Witwicky",
//       age:
//       20,
//       item:
//       [car: "Camaro", jacket: "Lucky jacket"],
//     ],
//     character2: [
//       name:
//       "Optimus Prime",
//       age:
//       "Unknown",
//       item:
//       [weapon1, "Sword", weapon2, "Gun"],
//     ],
//   },
// };
// console.log(movies);

// //-----

// let movies = {

//     nameOfMovie: "Transformers",
//     runtime: 144,
//     genre: "PG-13",
//     characters:
//         {

//         character1: {

//             name: "Sam Witwicky",
//             age: 20,
//             item: {

//                 car: "Camaro",
//                 jacket: "Lucky Jacket",

//             },
//         character2: {

//             name: "Optimus Prime",
//             age: "Unknown",
//             item: {

//                 weapon1: "Sword",
//                 weapon2: "Pistol",

//             },

//         },

//         },

//     },

// }
// console.log(movies);

//-----

let movies = {
  nameOfMovie: "Transformers",
  runtime: 144,
  genre: "PG-13",
  characters: {
    characterInfo: [
      {
        character1: [
          {
            name: "Sam Witwicky",
            age: 20,
            items: [
              {
                car: "Camaro",
                accessory: "Lucky Jacket",
              },
            ],
          },
        ],
        character2: [
          {
            name: "Optimus Prime",
            age: "Unknown",
            items: [
              {
                weapon1: "Sword",
                weapon2: "Pistol",
              },
            ],
          },
        ],
      },
    ],
  },
};

console.log(typeof movies);
console.log(movies.nameOfMovie);
console.log(movies.runtime);
console.log(movies.characters.characterInfo[0]);
console.log(movies.characters.characterInfo[0].character1[0].name);
console.log(movies.characters.characterInfo[0].character1[0].items[0].accessory);
