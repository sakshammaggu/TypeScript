let myFunc:(name: string)=>void=(name: string)=>{
    console.log(name);
};
let str="Saksham";
myFunc(str);

/*
    Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
    let num: number
*/
// let num=10;
// myFunc(num);
export {};