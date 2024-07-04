let myObj1:object={
    firstName: "Saksham",
    lastName: "Maggu"
};
console.log(myObj1);

/*
    Property 'firstName' does not exist on type 'object'.
*/
// console.log(myObj1.firstName)
// console.log(myObj1.lastName)

let myObj2={
    firstName: "Saksham",
    lastName: "Maggu"
} as {
    firstName: string; 
    lastName: string;
};
console.log(myObj2);
console.log(myObj2.firstName);
console.log(myObj2.lastName);
/*
    Property 'email' does not exist on type '{ firstName: string; lastName: string; }'.
*/
// console.log(myObj2.email);  

let myObj3={
    firstName: "Saksham",
    lastName: "Maggu"
} as {
    firstName: string;
    lastName: string;
    email?: string;
}
console.log(myObj3);
console.log(myObj3.firstName);
console.log(myObj3.lastName);
console.log(myObj3.email);  // undefined

export {};