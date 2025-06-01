"use strict";
// show a simple type
const myName = "Emmmanuel";
const age = 32;
console.log(myName);
// show a special type
const mySize = "EUR 10";
console.log(mySize);
// show an array and tuple
const myArray = ['jumping', 'sleeping', 'travelling'];
const myTuple = ["left", 21, "2 Johnson Rd", false];
//show an object
const myObject = {
    name: "Lawson", age: 27, citizen: true, size: "UK 27"
};
;
const myAliases = {
    name: "John",
    age: 13,
    grade: "73%",
    fees: true
};
const newBox = {
    material: "fabric",
    wheelNumber: 4,
    color: "red",
};
// show a union type
function Grade(union) {
    console.log(`Your total grade is ${union}.`);
}
Grade(90);
Grade("32");
//show how to use function
function addition(x, y) {
    return x + y;
}
const sum = addition(2, 4);
function multiply(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        return a * b;
    });
}
multiply(4, 6).then(console.log);
// show how to perfom casting
const cast = "Johnson";
console.log(cast.length);
