// Destructuring — Objects & Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
// let arr = [10, 20, 30];
// const [a, b, c] = arr;

// console.log(a, b, c);
// console.log(a);


let arr = [10, 20, 30, 40, 66, 70];
//  Rest
const [a, b, ...remaining_val_pack] = arr;
console.log(a, b, remaining_val_pack);


// Objects Destructuring
let obj = { name: "Owais", age: 25, salary: 200000 };
// console.log(obj);
// const { name, age, salary } = obj;
// const { name: fullName, age, salary } = obj;
//  Rest
const { name: fullName, ...rest } = obj;
console.log(fullName, rest);






// / Spread operator (...)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. 
let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

let arr3 = [...arr1, ...arr2];

console.log(arr3);

let obj1 = { name: "Owais", age: 25, salary: 200000 };
let obj2 = { edu: "Masters", uni: "NED" };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

let obj4 = { car: "Toyota", ...obj1 };
console.log(obj4);




// Template Literals
// let num1 = 20;
// let name3 = 'Luqman';
// console.log(`Name:${name3}, age:${num1}`);


// Ternary Operator (instead of if/else)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

let person_age = 15;
let inst = person_age > 22 ? "Uni" : person_age > 18 ? "college" : "school"
console.log(inst);



// Short-circuiting & Logical Operators: &&, ||, ??

let x = 0;
let y = "Ashar";

let result = x || y;
console.log(result);

// Nullish Coalescing Operator. (undefined, null)
let result2 = x ?? y;
console.log(result2);


// age backend se discount nh araha tu default dekha do.. else backend ka hi dekhao...
let discount = null;
let default_discount = 5;

let item_discount = discount || default_discount;
let item_discount2 = discount ?? default_discount;
console.log('item discount: ', item_discount);
console.log('item discount: ', item_discount2);

let enabled_discount = true;
let discount_tag = enabled_discount && `<p>we are offer discount on this item</p>`;


console.log('item discount: ', discount_tag);




// Optional Chaining (?.)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// let objx = {
//     name: "Malik",
//     age: 25,
//     salary: 200000,
//     // car: {
//     //     color: "red"
//     // }
// };
// // let x45 = obj.car && obj.car.color;
// console.log(objx.car?.color);

// // function Sub() {
// //     return true;
// // }


// Arrow Functions

function sum(a, b) {
    return a + b
}

console.log(sum(2, 4));

// const sum2 = (a, b)=>{

//     return a + b
// }
const sum2 = (a, b) => a + b;

console.log(sum2(2, 4));
