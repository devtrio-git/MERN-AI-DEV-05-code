// array of characters is string...

let str = "Hello, World!";
console.log(str);
console.log(str[0]);


let str2 = new String("Hello, World 2!");
console.log(str);

let str4 = 'Hello, World 3!';
console.log(str4);

let str3 = `Hello, World 3!`;
console.log(str3);


let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);

let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);


// escape characters

// let esc = 'Apple's'
let esc = "Apple's"

let fruit = 'Banana\'s'
let fruit2 = 'Banana\s'
console.log(fruit2);

// methods for string....

let msg = "We all are learning Web Development!"
console.log(msg.indexOf("are"));
console.log(msg.includes("are"));


console.log(msg.indexOf("l"));
console.log(msg.lastIndexOf("l"));



let ext = 'Apple Banana Mango';
console.log(ext.slice(0, 5));
console.log(ext.slice(0, -2));
console.log(ext.substring(0, 5));



let my_name = "Malik Muhammad Jahangir";
let short_name = my_name.replace("Muhammad", "M")
console.log(short_name, my_name);


// ASCII
let content = "Devtrio";
console.log(content.charCodeAt(0));


console.log(content.charAt(0));


let teacher = "     Owais Ahmed Khan    ";
console.log(teacher.toUpperCase());
console.log(teacher.toLowerCase());

console.log(teacher.trim());


let stds = "Amna, Sami, Daniyal, Sakib";
let stdNameList = stds.split(", ");

console.log(stdNameList);

let joinNames = stdNameList.join(", ");
console.log(joinNames);



// Task for string  "syed muhammad ali" => "Syed Muhammad Ali" Hint: charAt, slice, loop ...


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// DateTimes .....

// current date
let date = new Date();
console.log(date);
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// from 1st Jan, 1970
console.log(Date.now());


// create date....


let d = new Date(2025, 0, 24, 3, 30, 50);
console.log(d);
let d2 = new Date("October 13, 2025, 11:01:00");
console.log(d2);




// date methods 
let my_date = new Date();

my_date.setFullYear(2026)
my_date.setMonth(10)
my_date.setDate(25)
my_date.setHours(10)
my_date.setMinutes(22)
my_date.setSeconds(22)
my_date.setMilliseconds(22)


console.log(my_date.getFullYear());
console.log(my_date.getMonth());
console.log(my_date.getDate());
console.log(my_date.getHours());
console.log(my_date.getMinutes());
console.log(my_date.getSeconds());
console.log(my_date.getMilliseconds());



// Maths


console.log(Math.PI);

let num = 10.74;
console.log(Math.round(num));


let num2 = 10.30;
console.log(Math.ceil(num2));
console.log(Math.floor(num2));


console.log(Math.pow(2, 3), 2 ** 3);


console.log(Math.sqrt(25));
console.log("Sq of 27 :", Math.sqrt(27).toFixed(2));


// return integer part
console.log(Math.trunc(4.5));
console.log(Math.trunc(-4.5));


// random!!

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 100));

