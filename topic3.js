// Types of declarations

// 1) Variable declaration
// let a; // Operator and operand

// 2) Assign a value
// a = 4;

// 3) Perform an evaluation that returns a single value
// b + c

// Three expressions in here
// 1. let a - variable declaration
// 2. perform an eval b + c
// 3. result assigned to a
// let b = 3;
// let c = 2;
// let a = b + c;

// Operators

// Assignment =
// Arithmetic + - * / %
// Increment & decrement ++ --

// String "" +

// Precedence
// let t = 1 + 2 * 3;
// console.log(t);
// let r = (1 + 2) * 3;
// console.log(r);

// Function invocation operators ()

// Logical and: && or: ||

// Member accessor operator .

// Code block operator {}

// Array element access operator []

// Decision statements

/*
const count = 3;

if (count == 4) {
    console.log(`Count is 4`);
} else if (count > 4) {
    console.log(`Count is greater than 4`);
} else if (count < 4) {
    console.log(`Count is less than 4`);
} else {
    console.log(`Count is not 4`);
}
*/
/*
const hero = "baTman";

switch (hero.toLocaleLowerCase()) {
    case "superman":
        console.log("Super strength");
        console.log("X-ray vision");
        break;
    case "batman":
        console.log("Intelligence");
        console.log("Fighting skills");
        break;
    default:
        console.log("Member of JLA");
}
*/

// Ternary operator

1 < 2 ? console.log("true") : console.log("false");

// Iteration statements
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/

// let arr = [4, 8, 15, 34, 65];

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let x = 1;
while (x < 10) {
    console.log(x++);

    // if (x == 7) {
    //     break;
    // }
}

for (i = 1; i < 5; i++) {
    console.log(`outer: ${i}`);

    for (j = 1; j < 5; j++) {
        console.log(`inner: -${j}-`);
    }
}

// Object Object() - template
const dog = new Object();

dog.name = "max";
dog.gender = "m";
dog.age = 9;
dog.breed = "mixed";
dog.trained = true;

const cat = {
    name: "Tama",
    gender: "f",
    age: 2,
    breed: "pelsha",
};

for (d in dog) {
    console.log(dog[d]);
}

for (c in cat) {
    console.log(cat[c]);
}

function Person(firstName, lastName, age, gender, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.country = country;
}

let toto = new Person("Kotaro", "Tanaka", 21, "M", "Japan");

function Car(make, model, year, colour, distanceMoved, timeElapsed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.distanceMoved = distanceMoved;
    this.timeElapsed = timeElapsed;
    this.velocity = function() {
        const result = this.distanceMoved / this.timeElapsed;
        return result;
    };
}

Car.prototype.engine = "turbo";

let mazda = new Car("Mazda", "Atenza", 2020, "Blue", 120, 1.2);
let honda = new Car("Honda", "CR-V", 2004, "Black");

console.log(mazda.velocity());
console.log(honda.engine);

function PC(make, model, display) {
    this.make = make;
    this.model = model;
    this.display = display;
}

PC.prototype.color = "silver";

PC.prototype.getReport = function() {
    console.log(
        `${this.make}'s ${this.model} has ${this.display} inch screen and ${this.color}`,
    );
};

const mac = new PC("Mac", "MacBookAir", 13);
mac.color = "gold";

mac.getReport();

SVGUnitTypes.prototype = new Car();

let emptyObj = {};
emptyObj = null;

console.log(emptyObj);
// alert(emptyObj);

let str = "This is a sample string";
let re = /Sample/i; // i modifier which ignore the case
let re2 = new RegExp("sample", "i"); // Reg expression

let check = re.exec(str);

if (check) {
    // alert("Found a match");
    // alert(check);
} else {
    // alert("No match");
}

let check2 = re.test(str);
// alert(check2);