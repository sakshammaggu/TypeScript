let myFunc:(person: string, date: Date)=>void=(person: string, date: Date)=>{
    console.log(person + " " + date.toISOString());
};

let person="Saksham";
let date=new Date();
myFunc(person, date);

export {};