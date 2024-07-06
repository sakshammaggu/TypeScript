"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectTypeFunc1 = function () {
    var myFunc1 = function (coordinate) {
        console.log("x coordinate - ".concat(coordinate.x));
        console.log("y coordinate - ".concat(coordinate.y));
    };
    var myObj = {
        x: 10,
        y: 20
    };
    myFunc1(myObj);
};
var objectTypeFunc2 = function () {
    var userDetails = function (person) {
        console.log("FirstName - ".concat(person.firstName));
        console.log("LastName - ".concat(person.lastName));
    };
    var testObj1 = {
        firstName: "Saksham"
    };
    var testObj2 = {
        firstName: "Saksham",
        lastName: "Maggu"
    };
    userDetails(testObj1);
    userDetails(testObj2);
};
objectTypeFunc1();
objectTypeFunc2();
