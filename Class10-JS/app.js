// Printing ways in JS
console.log("Welcome in Javascript")

// alert("Owais Ahmed KHan")
// alert("DevTrio")

// document.write("HEllo world" + "<br>");
// document.write(90 + 89);

// Variables
// String
var country = "Pakistan";
var city = "Karachi";

// console.log(country)
// alert(city);

// numeric
var age = 25;
var height = 5.11;
// console.log(age, height);

// Boolean
var isLoggedIn = true //1
var isFeePaid = false //0
// console.log(isLoggedIn, isFeePaid);

// Declare & Initialization
var firstName; //Declaraton
firstName = "Owais";

var weight = 65.89;
var newWeight = weight + 15.21;

// console.log(newWeight);

var car = undefined;
var nationality = null;

// console.log(nationality);

// how to know type of your data
// console.log(typeof(country));
// console.log(typeof(isLoggedIn));
console.log(typeof (newWeight));

// Statements
/*
var a = 4 //statement 1
var b = 24 //statement 2
var c = 20 //statement 3
c = a + b//statement 4 */
// console.log(c)//statement 4

// When separated by semicolons, multiple statements on one
// line are allowed
i = 3; j = 5; k = i + j;
// alert(i);console.log(k);

var a = 5 // New line will end statement
a * 4
// console.log(a)
// console.log(a)

// var a = 5a * 4 // Error, Will Not work
// alert(a)console.log(a)

// expression
// a + b; // expression
// 4 / 2; // expression
// var a = 5; //statement
// a * 4; // expression
// "John" + " " + "Doe"; // expression

// Legal names:

var hello = 56;
var _xyz = 44;
var $work = 90;
var user2 = 56;
var i_info = 99;
var my$work = 77;

// Illegal names:
/*var 2user = 12; // Can't start with number
var my user = 23; // Can't contains space
var hello#world = 34;
var my-info = 44;
var my?info = 45;
var my*info = 45;*/


// var rose = "Hello from small";
// var Rose = "Hello from big";
// console.log(rose);

// console.log(Rose);

// console.log(ROSE);// Error

// Camel Case
// var userResponse
// var userResponseTime
// var userResponseTimeLimit
// var response

// Arithmetic Operators

// var a = 5;
// var b = 3;
// var c = a + b; // Addition, result 8
// var d = a - b; // Subtraction, result 2
// var e = a * b; // Multiplication, result 15
// var f = a / b; // Division, result 1.66
// var g = a % b; // Modulus, result 2
// var h = a ** b; // Exponentiation, result 125

// Example Same as
// a += 5; a = a + 5;
// a -= 5; a = a - 5;
// a *= 5; a = a * 5;
// a /= 5; a = a / 5;
// a %= 5; a = a % 5;
// a **= 5; a = a ** 5;


// var a = 5 + 2 * 3 - 2 / 2;
//    7 * 3 -1
// 21 -1 : 20
// DMAS
// 5 + 2 * 3 - 1
// 5 + 6 - 1
// 11 -1
// 10 

var a = 5 + 2 * (3 - 2) / 2; // result 6
console.log(a);

