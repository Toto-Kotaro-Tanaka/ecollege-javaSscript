function datesDiff(date1, date2) {
    // Constant for milliseconds in a day
    const DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    let date1_mill = date1.getTime();
    let date2_mill = date2.getTime();

    // Calculate the difference in milliseconds
    let difference_mill = Math.abs(date1_mill - date2_mill);

    // Convert back to days and return
    return Math.round(difference_mill / DAY);
}

let current_date = new Date();

let new_years_date = new Date();
new_years_date.setFullYear(new_years_date.getFullYear() + 1);
new_years_date.setMonth(0);
new_years_date.setDate(1);

let days_left = datesDiff(current_date, new_years_date);
console.log(`${days_left} left till new year`);

function getTheDay(date1) {
    let myDate = new Date(date1);
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[myDate.getDay()];
    alert(
        "The day of the week is " +
        n +
        "for the following date: " +
        myDate.toString(),
    );
}

let d = new Date();
console.log("Date: " + d);
let date = d.getDate();
let month = d.getMonth();
console.log("Specific: " + date + " / " + month);

// const num1 = document.getElementById("num1").value;

// function displayNum(num1) {
//     console.log(num1);
// }

// document.getElementById("btnNum").addEventListener("click", displayNum(num1));

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function nutsnBits(x, y) {
    x = parseInt(x);
    y = parseInt(y);

    alert(
        `The binary representation of the numbers are: ${x.toString(
            2,
        )} and ${y.toString(2)}`,
    );
    console.log(`The result of the BITWISE AND is ${x & y}`);
    console.log(`The result of the BITWISE OR is ${x | y}`);
    // console.log(`The result of the BITWISE XOR is ${x  y}`);
    console.log(`The result of the BITWISE shift left operator is ${x << y}`);
    console.log(
        `The result of the BITWISE shift left with sign operator is ${x >> 1}`,
    );
    console.log(
        `The result of the BITWISE shift right with zero operator is ${
            x >>> 1
        }`,
    );
}

document.getElementById("btnNum").addEventListener("click", function() {
    nutsnBits(num1.value, num2.value);
});

function incAndDec(x) {
    let result = 0;
    // ++x;
    // x++;
    // --x;
    // x--;
    console.log(x);
}

incAndDec(1);

let x = 5;
if (x === "5") {
    // alert("true");
} else {
    // alert("false");
}

function euler() {
    let n = Math.E;
    console.log(n);
}

function log2E() {
    let m = Math.LOG2E;
    console.log(m);
}

function log10E() {
    let o = Math.LOG10E;
    console.log(o);
}

const log2 = function() {
    let log2 = Math.LN2;
    console.log(log2);
};

const log10 = () => console.log(Math.LN10);

euler();
log2E();
log10E();
log2();
log10();

console.log(Math.PI);

function cos(cos) {
    console.log(`cos: ${Math.cos(cos)}`);
}

cos(1);

function sin(sin) {
    console.log(`sin: ${Math.sin(sin)}`);
}

sin(1);

function tan(tan) {
    console.log(`tan: ${Math.tan(tan)}`);
}

tan(1);

function acos(acos) {
    console.log(`acos: ${Math.acos(acos)}`);
}

acos(1);

function asin(asin) {
    console.log(`asin: ${Math.asin(asin)}`);
}

asin(1);

function atan(atan) {
    console.log(`atan: ${Math.atan(atan)}`);
}

atan(1);

function atan2(x, y) {
    console.log(`atan2: ${Math.atan2(y, x)}`);
}

atan2(6, 2);

const abs = function(abs) {
    console.log(`abs: ${Math.abs(abs)}`);
};

abs(-897);

const floor = (floor) => console.log(`floor: ${Math.floor(floor)}`);

floor(25.38974);

const ceiling = (ceiling) => console.log(`ceiling: ${Math.ceil(ceiling)}`);

floor(25.8974);

const sqrt = function(sqrt) {
    console.log(`sqrt: ${Math.sqrt(sqrt)}`);
};

sqrt(16);

const pow = function(p1, p2) {
    console.log(`power: ${Math.pow(p1, p2)}`);
};

pow(2, 3);

const exp = function(exp) {
    console.log(`exp: ${Math.exp(exp)}`);
};

exp(4);

const log = function(log) {
    console.log(`log: ${Math.log(log)}`);
};

log(8);