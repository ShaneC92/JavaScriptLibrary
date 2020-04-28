/*
    falsy values:
        1. false
        2. 0
        3. "", '', ``
        4. null
        5. undefined
        6. NaN
*/

let isOn = false;

if (isOn) {
    console.log("The light is on.")
}

if (isOn == false) {
    console.log("The light is off.")
}

let weather = 60;

if (weather < 70) {
    console.log("Wear a jacket")
}

