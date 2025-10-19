'use strict'

// d = 100;
// console.log(d);




// Increment & Decrement in JavaScript


// increment (++)
// The increment (++) operator increments (adds one to)
// its operand and returns the value before or after the increment,
// depending on where the operator is placed.

// x++	Post-increment → Uses the value first, then increases
//
// let x = 10;

// x = x + 3;
// x += 3;

// x++;
// let z = x++;

// console.log(z); // 10







// ++x	Pre-increment → Increases first, then uses the value

// let y = 10;
// let u = ++y
// console.log(u); // 11





// let a = 10;
// let b = 20;

// 10 + 11
// let c = a++ + a++;
// let c = ++a + a++;
// let c = ++a + ++a;
// let c = a++ + ++a;
// console.log(c);




// decrement (--)
// The decrement (++) operator increments (adds one to)
// its operand and returns the value before or after the decrement,
// depending on where the operator is placed.
// x--	Post-decrement


// let a = 20;
// console.log(a--);
// console.log(a);



// --x	Pre-decrement

// let b = 10;
// console.log(--b);
// console.log(--b);


// let a = 10;
// let b = 20;

// 10 + 11
// let c = a-- + a--;
// let c = ++a + a--;
// let c = --a + ++a;
// let c = a-- + --a;
// console.log(c);







// Conditional Statements in JS

// let luqman = 25;
//
// if else

// if (luqman >= 18) {

//     console.log("Eligible for voting");
// } else {
//     console.log("Not eligible");
// }


// if else if

// let num = 11;
// if (num % 2 == 0) {
//     console.log('even');

// }

// let student = 72;

// if (student >= 80) {
//     console.log("A+");

// } else
//     if (student >= 70) {

//         if (student >= 75) {
//             console.log("A");
//         } else {
//             console.log("A-");
//         }

//     }
//     else
//         if (student >= 60) {
//             console.log("B");

//         } else {
//             console.log("F");

//         }

// switch statement....

let fruit = 'apple';


switch (fruit) {
    case 'mango':
        console.log("Yellow");
        break;

    case 'apple':
        console.log("Red");
        break;

    default:
        console.log("Unknown color");
        break;
}




// Loops....


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// number , start , end

// for loop...

//     start       end
// for (let i = 1; i <= 10; i++) {
//     console.log('2 x ', i, ' = ', i * 2);
// }

// continue break..

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log('i = ', i);

// }

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log('i = ', i);

// }

// let sum = 0;

// for (let i = 1; i <= 1000; i++) {
//     if (i % 2 == 0) {

//         sum = sum + i;
//     }
// }

// console.log(sum);


// factorial...
// 5! => 5 x 4 x 3 x 2 x 1

// let fact = 5;
// let ans = 1;


// for (let i = 5; i > 0; i--) {
//     // ans = ans * i;
//     ans *= i;
// }
// console.log(ans);



// white

// (let i = 1; i <= 10; i++)

// let i = 121;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }



// do while
// let i = 100;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);
