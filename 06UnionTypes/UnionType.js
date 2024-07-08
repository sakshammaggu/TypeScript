"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = 90;
console.log(score);
score = 'A+';
console.log(score);
var person;
person = {
    name: "Saksham",
    id: 101
};
console.log(person);
person = {
    userName: "Saksham Maggu",
    id: 102
};
console.log(person);
person = {
    name: "Saksham",
    userName: "Saksham Maggu",
    id: 103
};
console.log(person);
// ----------------------------
var scoreCalc = function (id) {
    console.log(id);
};
scoreCalc(100);
scoreCalc("A+");
// ----------------------------
var showVal = function (x) {
    /*
        Property 'toUpperCase' does not exist on type 'string | number'.
        Property 'toUpperCase' does not exist on type 'number'.t
    */
    // console.log(x.toUpperCase());
    if (typeof x === "number") {
        console.log(x);
    }
    else if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
};
showVal(10);
showVal("abc");
