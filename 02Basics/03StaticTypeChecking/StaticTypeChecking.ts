let message:string="hello";

/*
    This expression is not callable.
    Type 'String' has no call signatures.ts(2349)
    let message: string
*/
//message();

let myFunc1:()=>void=()=>{
    console.log(message);
}
myFunc1();

/*
    Property 'toLowerCase' does not exist on type '() => void'.ts(2339)
    string method can't be applied to function of void;
*/
// myFunc1.toUpperCase();

let myFunc2:()=>string=()=>{
    return message;
}
console.log(myFunc2());
console.log(myFunc2().toUpperCase());    // will not give type error because message return type is string

export {};