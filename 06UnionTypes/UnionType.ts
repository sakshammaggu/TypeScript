let score:number|string;
score=90;
console.log(score);
score='A+';
console.log(score);

// ----------------------------

type User={
    name: string,
    id: number
}
type Admin={
    userName: string,
    id: number
}

let person:User|Admin;

person={
    name: "Saksham",
    id: 101
};
console.log(person);

person={
    userName: "Saksham Maggu",
    id: 102
};
console.log(person);

person={
    name: "Saksham",
    userName: "Saksham Maggu",
    id: 103
};
console.log(person);

// ----------------------------

const scoreCalc:(id:number|string)=>void=(id:number|string)=>{
    console.log(id);
};
scoreCalc(100);
scoreCalc("A+");

// ----------------------------

const showVal:(x:number|string)=>void=(x:number|string)=>{
    /*
        Property 'toUpperCase' does not exist on type 'string | number'.
        Property 'toUpperCase' does not exist on type 'number'.t
    */
    // console.log(x.toUpperCase());

    if (typeof x === "number") {
        console.log(x);
    } else if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
};
showVal(10);
showVal("abc");

// ----------------------------

export {};