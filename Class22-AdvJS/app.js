// console.log(a) // readable with out any error but show undefined
// var a = 10;
// var a; // declare
// a = 10; // inilialized

// let a = 10; // let is also hoisted but it is in Temporal Dead Zone until their declaration is encountered.

// console.log(a)


// function add(a, b){
//     return a+b;
// }
// console.log(add)



// let add = (a,b)=>{
//     return a+b;
// }
// console.log(add(2,3))



// function localExample(){
//     var localVar = "I am Local";
//     console.log(localVar)
// }

// localExample();

// console.log(localVar)


// {
//     let x = 10;
//     const y = 10;
//     var z = 10;
// }

// console.log(x)
// console.log(y)
// console.log(z)


// block scope  let, const
// function scope var, let, const 


//  Lexical Scope

// function outer(){
//     let out = "I am out";
//     function inner(){
//         let innerVar = "I am innerVar"
//         console.log(out) // accessible due to lexical scope
//     }
//     console.log(innerVar)
//     inner()
// }

// outer();



// function counter(){
//     let count = 0;

//     return function(){
//         count++; // count = count + 1
//         console.log(count)
//     }
// }


// const increment = counter();

// console.log(increment);

// increment(); // 1
// increment(); // 2
// increment(); // 3
// increment(); // 4



function bankAccount(initialAmout=0){
    let balance = initialAmout;
    console.log("Account Open, Your Balance is: ", balance)
    return {
        deposit(amount){
            balance += amount // balance = balance + amount
            console.log("Balance:", balance)
        },
        withdraw(amount){
            if(amount > balance){
                console.log("Insufficiant Balance", balance)
            }else{
                balance -= amount
                console.log("Balance:", balance)
            }
        }
    }
}

const myAccount = bankAccount(5000);
// console.log(myAccount)

myAccount.deposit(50000);
// myAccount.deposit(10000);

myAccount.withdraw(70000)