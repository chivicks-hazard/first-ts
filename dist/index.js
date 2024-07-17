"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jane']
];
// Union
let Pid;
Pid = 'X';
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up);
console.log(Direction1.Down);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// FUnctions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const customer = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const vic = new Person(1, 'Victor');
console.log(vic);
console.log(vic.register());
// Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jane', 'jill']);
console.log(addNum(3, 4));
console.log("ID: ", id);
