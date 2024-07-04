"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello";
/*
    This expression is not callable.
    Type 'String' has no call signatures.ts(2349)
    let message: string
*/
//message();
var myFunc1 = function () {
    console.log(message);
};
myFunc1();
/*
    Property 'toLowerCase' does not exist on type '() => void'.ts(2339)
    string method can't be applied to function of void;
*/
// myFunc1.toUpperCase();
var myFunc2 = function () {
    return message;
};
console.log(myFunc2());
console.log(myFunc2().toUpperCase()); // will not give type error because message return type is string
