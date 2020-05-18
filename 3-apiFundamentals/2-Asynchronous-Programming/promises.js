// Boolean declaration
var amIGood = true;

//promise
var iCanHasGift = new Promise(function (resolve, reject) {
  if (amIGood) {
    var gift = {
      brand: "HasMattelBro",
      item: "Turbo-Man action figure",
    };
    resolve(gift); //fulfilled
  } else {
    var naughty = "You've made Santa's naughty list; enjoy your coal";
    reject(naughty); //rejected
  }
});

//promise Call

var checkTwice = function () {
  iCanHasGift
    .then(function (fulfilled) {
      //nice list = gift
      console.log(fulfilled);
      //output: {brand: "HasMattelBro", Item: "Turbo-Man action figure"}
    })
    .catch(function (error) {
      //naught list = coal
      console.log(error);
      //output: "You've made Santa's naughty list; enjoy your coal!"
    });
};

checkTwice();
//comment out for 2nd promise

//----
// 2nd Promise
//----

var playDate = function (gift) {
  return new Promise(function (resolve, reject) {
    var message = "Salutations fellow child I enjoy interacting with! I notice you revieved a posable plastice Batman figurine during the Yultide season. What do you think of my new " + gift.brand + " " + gift.item + "?";
    resolve(message);
  });
};

//Promise Call

var checkTwice = function () {
  console.log("before Christmas"); //log before
  iCanHasGift
    .then(playDate)
    .then(function (fulfilled) {
      console.log(fulfilled);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("after opening gifts"); //log after
};
checkTwice();
