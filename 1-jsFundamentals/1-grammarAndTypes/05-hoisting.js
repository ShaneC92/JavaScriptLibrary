/*
    Ledger:
        variable for name whose value is currently undefined
        function called foo, that does { .. code stuff .. }
*/

console.log(name);
var name = "Shane";

console.log(name);

b();

function b() {
    console.log("I have been hoisted")
}

