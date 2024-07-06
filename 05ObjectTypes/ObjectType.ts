const objectTypeFunc1:()=>void=()=>{
    const myFunc1:(coordinate: {x:number, y:number})=>void=(coordinate: {x:number, y:number})=>{
        console.log(`x coordinate - ${coordinate.x}`);
        console.log(`y coordinate - ${coordinate.y}`);
    };
    const myObj={
        x: 10,
        y: 20
    };
    myFunc1(myObj);
};

const objectTypeFunc2:()=>void=()=>{
    const userDetails:(person: {firstName:string, lastName?:string})=>void=(person: {firstName:string, lastName?:string})=>{
        console.log(`FirstName - ${person.firstName}`);
        console.log(`LastName - ${person.lastName}`);
    };
    const testObj1={
        firstName: "Saksham"
    };
    const testObj2={
        firstName: "Saksham",
        lastName: "Maggu"
    };
    userDetails(testObj1);
    userDetails(testObj2);
};

objectTypeFunc1();
objectTypeFunc2();

export {};