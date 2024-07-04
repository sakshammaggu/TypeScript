"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myObj1 = {
    firstName: "Saksham",
    lastName: "Maggu"
};
console.log(myObj1);
/*
    Property 'firstName' does not exist on type 'object'.
*/
// console.log(myObj1.firstName)
// console.log(myObj1.lastName)
var myObj2 = {
    firstName: "Saksham",
    lastName: "Maggu"
};
console.log(myObj2);
console.log(myObj2.firstName);
console.log(myObj2.lastName);
/*
    Property 'email' does not exist on type '{ firstName: string; lastName: string; }'.
*/
// console.log(myObj2.email);  
var myObj3 = {
    firstName: "Saksham",
    lastName: "Maggu"
};
console.log(myObj3);
console.log(myObj3.firstName);
console.log(myObj3.lastName);
console.log(myObj3.email); // undefined
