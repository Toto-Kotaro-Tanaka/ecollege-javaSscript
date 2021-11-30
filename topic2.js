let a = 7;
let A = 20;
a = 6;
a = 5;
a = 4;
let b = 3;
let c = a + b;
console.log("Answer: " + c);

let firstNum = 7;
let secondNum = 8;
let firstName = "Jenny";
let zipCode = 78398;

// ##############################

// Variables, Data Types and Functions: Data types

let d = 7; // number
console.log(typeof d);

let e = true; // boolean - true or false
console.log(typeof e);

let f = "hello world"; // string
console.log(typeof f);

let g;
console.log(g); // undefined
console.log(typeof g);

// ##############################

// Variables, Data Types and Functions: Type Coercion and Conversion

let h = 7;
let i = "6";
i = parseInt(i, 10);
let j = h + i;
console.log("Answer: " + j);

let k = parseInt("bob", 10); // NaN
let l = isNaN(k);
console.log(k);
console.log(l);

// ##############################

// Variables, Data Types and Functions: Arrays

let arrNum = [4, 5, 76, 20, 64];
let arrStr = ["Bob", "David", "Jason", "Alex"];
console.log(arrNum);
console.log(arrNum[0]);
console.log(arrStr[3]);

arrNum[0] = 8;
console.log(arrNum[0]);
console.log(typeof arrNum);

let arrMix = [4, "alex", true];
console.log(arrMix.length);

arrNum[10] = 77;
console.log(arrNum);
console.log(arrNum[8]);
console.log(arrNum.length);

arrStr.push("Gary");
console.log(arrStr);

// ##############################

// Variables, Data Types and Functions: Function declaration

function sayHello() {
    console.log("------------");
    console.log("hello");
    console.log("------------");
}

// sayHello();
let sayH = sayHello;
sayH();

function sayHello2(name) {
    console.log("------------");
    console.log(`Hello, ${name}`);
    console.log("------------");
}

sayHello2("Bob");
sayHello2("Sally");

function calTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calTax(200);
console.log(tax);

// ##############################

// Variables, Data Types and Functions: Basic of scopes

let scope1 = "first";

function scopeTest() {
    console.log(scope1);

    scope1 = "first - changed";

    if (scope1 != "") {
        console.log(scope1);

        // let scope3 = "third";
    }

    // console.log(scope3);

    // let scope2 = "second";
}

scopeTest();
// console.slog(scope2);
console.log(scope1);

// ##############################

// Variables, Data Types and Functions: Object Literals

let car = {
    make: "bmw",
    model: "745li",
    year: 2010,
    getPrice: function() {
        // Perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + " " + this.model);
    },
};

car.printDescription();
console.log(car.year);
console.log(car["year"]);

let anotherCar = {};
anotherCar.whatever = "Bob";
console.log(anotherCar.whatever);

let obj = {
    myProperty: {
        b: "h1",
    },
};

console.log(obj.myProperty.b);

let obj2 = {
    myProperty2: [{ d: "this" }, { e: "can" }, { f: "get" }, { g: "crazy" }],
};

console.log(obj2.myProperty2[1]);

let carLot = [
    { year: 2007, make: "toyota", model: "4runners" },
    { year: 2015, model: "bmw", model: "528i" },
    { year: 1982, model: "buick", model: "skylark" },
];

// ##############################