// key:value format

// what denotes an object {}
let netflix = {
  //    : colon to assign value
  id: 1,
  //    , comma to seperate
  name: "The Office",
  //    {} To nest another object
  seriesInfo: {
    seasons: 9,
    //     [] to nest an Array
    seasonInfo: [
      {
        season: 1,
        episodes: 6,
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
        ],
      },
      {
        season: 2,
        episodes: 22,
        episodeInfo: [
          {
            episode: 1,
            episodeName: "The Dundies",
          },
        ],
      },
    ],
  },
};

console.log("Whole Object:", netflix);

//****Just the seriesInfo
console.log("Just Series Info", netflix.seriesInfo);

//****Grabbing the seasonInfo
console.log("Just the Season Info", netflix.seriesInfo.seasonInfo);

//****Grabbing just the first season info
console.log("Just the first season", netflix.seriesInfo.seasonInfo[0]);

//****Grabbing just the first episode season 1

console.log(
  "Just the first season, episode 1",
  netflix.seriesInfo.seasonInfo[0].episodeInfo[0]
);

//****Challenge - Pull out The Dundies
console.log(
  "Just",
  netflix.seriesInfo.seasonInfo[1].episodeInfo[0].episodeName
);

//****SPACEJAM
let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit1: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevil: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky",
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko",
  },
  nbaPlayers: {
    "pheonix Suns": "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkKnicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charlotteHornets2: "Muggsy Bogues",
  },
};

console.log(Object.keys(spaceJam));
console.log(Object.keys(spaceJam.toonSquad));
console.log(spaceJam.monstars[0]);
console.log(spaceJam.toonSquad.bird);
console.log(spaceJam.nbaPlayers["pheonix Suns"]);
console.log(spaceJam.nbaPlayers["newJerseyNets"]);
console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

//*****Garden
let garden = {
  vegetable: "zucchini",
  flower: "sun flowers",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10,
};

let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]);

let zucchini = garden["vegetable"];
console.log(zucchini);

let baking = {};
//bunch of code here

baking.zucchini = "Better make some bread!";
console.log(baking);

baking["flour"] = "Batter up!";
console.log(baking);

console.log(baking[garden["vegetable"]]);
//garden["vegetable"] = zucchini = "Better make some bread"
