/*
Pig Latin: 
  -Create a function that takes in strings
  -In the function, translate a phrase into pig latin and pring both the original and pig latin version to the console.
  -If able to do so, return the value into another variable and pring that variable.
  --What is Pig Latin?
    *If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an "ay" to the end (i.e. Pig Latin => IgPay AtinLay)
    * If the word begins with a vowel, simply add an "ay" at the end of the word
*/

// Pig -> IgPay (testing one word, testing the consonant case)
// Latin -> AtinLay (testing one word, testing the vowel case)
// Pig Latin -> IgPay AtinLay (tests a sentence with both consonants and vowels)

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function translate(message) {
  console.log(message.split(" ").map(translateWord).join(" "));
}

function translateWord(word) {
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) !== -1) break;
    if (word.slice(i, i + 2) === "ay") i += 1;
  }
  console.log(word.slice(i) + word.slice(0, i) + "ay");
}
translateWord("are");
translateWord("Hello");
translateWord("Are");

//----

function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + "ay";
  } else {
    let vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
  console.log(pigLatin);
}

translatePigLatin("hare");
translatePigLatin("Hello");
translatePigLatin("Index");

//EXAMPLE------
//-------------

let firstTest = "Hello"; // expecting: "elloHay"

const vowels = ["a", "e", "i", "o", "u"];

const pigLatin = (toTranslate) => {
  /* Check whether the first character is a vowel or consonant
        Vowel -> 
            -add "ay" to the end of the word.
            
        Consonant -> 
            -remove from the first character to the first vowel (iteration)
            -take those letters, in order, and place them at the end of the word
            -add "ay" to the end of the word
        
        return the translated word
    */

  let translated;

  toTranslate = toTranslate.toLowerCase();
  if (vowels.includes(toTranslate[0])) {
    translated = toTranslate + "ay";
  } else {
    // for (let i = 0; i < toTranslate.length; i++) {
    //     if (vowels.includes(toTranslate[i])) {
    //         let chunk = toTranslate.slice(0, i);
    //         translated = toTranslate.slice(i) + chunk + "ay";
    //         i = toTranslate.length;
    //     }

    // }

    while (!vowels.includes(toTranslate[0])) {
      console.log(toTranslate);
      let first = toTranslate[0];
      toTranslate = toTranslate.substring(1) + first;
    }
    translated = toTranslate + "ay";
  }
  console.log(translated);
  return translated;
};

pigLatin("latin"); // -> atinlay

// SENTENCE EXAMPLE --------
// -------------------------

let firstTest = "Hello"; // expecting: "elloHay"

const vowels = ["a", "e", "i", "o", "u"];

//Hello my name is Jeff;

const pigLatin = (toTranslate) => {
  //console.log(toTranslate);
  let translated = "";
  let wordsList = toTranslate.split(" ");
  //console.log(wordsList);

  wordsList.forEach((item) => {
    //console.log("FOR EACH LOOP RUNNING:");
    //console.log(item);
    // Procedure defined below
    let translatedWord;
    item = item.toLowerCase();
    //console.log(item);

    if (vowels.includes(item[0])) {
      translatedWord = item + "ay";
      //console.log(translatedWord);
    } else {
      for (let i = 0; i < item.length; i++) {
        if (vowels.includes(item[i])) {
          //console.log(translatedWord);
          let chunk = item.slice(0, i);
          //console.log(chunk);
          translatedWord = item.slice(i) + chunk + "ay";
          //console.log(translatedWord);
          i = item.length;
        }
      }
    }

    translated += translatedWord + " ";
    //console.log(translated);
  });

  console.log(translated);
  return translated;
};

pigLatin("latin"); // -> atinlay
pigLatin("pig latin");
