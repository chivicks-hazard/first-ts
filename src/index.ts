// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

// Arrays
let ids: number[] = [1,2,3,4,5];

let arr: any[] = [1, true, 'Hello'];


// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

let employee: [number, string][];

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jane']
];

// Union
let Pid: number | string;

Pid = 'X';

// Enum 
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
};

console.log(Direction1.Up);
console.log(Direction1.Down);

// Object
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John' 
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// FUnctions
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message);
    
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const customer: UserInterface = {
    id: 1,
    name: 'John' 
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Class
interface PersonInterface {
    id: number,
    name: string,
    age?: number
}

class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
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
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', 'Developer');

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad','john','jane','jill']);


console.log(addNum(3,4));



console.log("ID: ", id);
