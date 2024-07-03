/*
      
    // Accessing the property 'toLowerCase' 
    // on 'message' and then calling it
    
    message.toLowerCase();

    // Calling 'message'
    message();

    Is message callable?
    Does it have a property called toLowerCase on it?
    If it does, is toLowerCase even callable?
    If both of these values are callable, what do they return?
*/

let message1:string="Hello World";
message1.toLowerCase();
console.log(message1);

let message2:()=>void=()=>{
    console.log("Hello World");
};
message2();

export {};