"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myFunc = function (person, date) {
    console.log(person + " " + date.toISOString());
};
var person = "Saksham";
var date = new Date();
myFunc(person, date);
