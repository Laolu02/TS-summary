// show a simple type

const myName: string = "Emmmanuel";
const age :number = 32
console.log(myName);

// show a special type

const mySize: any ="EUR 10"
console.log(mySize)

// show an array and tuple
const myArray: readonly string[] =['jumping', 'sleeping','travelling'];
const myTuple: [string, number, any ,boolean] =["left", 21, "2 Johnson Rd", false];

//show an object
const myObject: {name: string,age: number,citizen:boolean, size: unknown }={
    name: "Lawson", age: 27, citizen: true, size: "UK 27"
};

//show an enum
const enum myEnum{
    USER = 'USER',
    ADMIN= 'ADMIN',
};

//show an aliases and interface 
type studentName = string
type studentAge = number
type studentGrade = any
type feesPaid = boolean

type Student={
    name: studentName
    age: studentAge
    grade: studentGrade
    fees: feesPaid
};
const myAliases: Student={
    name: "John",
    age: 13,
    grade: "73%",
    fees: true
};

interface box{
    material: string,
    wheelNumber : number,
}
interface colorBox extends box{
    color: string
}

const newBox: colorBox={
    material: "fabric",
    wheelNumber: 4,
    color: "red",
};

// show a union type
function Grade (union:number| string) {
    console.log(`Your total grade is ${union}.`)
}
Grade(90);
Grade("32")

//show how to use function
function addition (x: number, y: number){
    return x+y;
}
 const sum= addition(2,4);

 async function multiply (a: number, b: number): Promise<number>{
    return a*b;
 }
 multiply(4,6).then(console.log)


// show how to perfom casting
const cast: any = "Johnson"
console.log((cast as string).length)