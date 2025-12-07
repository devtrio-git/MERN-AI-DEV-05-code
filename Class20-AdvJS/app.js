console.log("Hello");
// setTimeout(func, delay); 2000=2secs
// console.log("Owais");
// console.log("Ahmed");
// console.log("Khan");
// console.log("MS DataScience");
// setTimeout(function(){
//     console.log("100 Names printing...");
// }, 3000);
// console.log("Ashar");
// console.log("Ahmed");
// console.log("MS DataScience");
// setTimeout(function(){
//     console.log("50 Names printing...");
// }, 5000);
// console.log("Malik");
// console.log("Muhammad");
// console.log("Jahangir");
// console.log("MS DataScience");
// setTimeout(function(){
//     console.log("25 Names printing...");
// }, 2000);

// // Another way
// const devtrio = function(){
//     console.log("Devtrio is best");
// }

// setTimeout(devtrio, 4000);

// const changeHeading = function(){
//     document.querySelector("h1").innerText = "Change in Devtrio ASYNC JS Class";
// }

// let devtrioTimeout = setTimeout(changeHeading, 6000);
// // clearTimeout(devtrioTimeout);
// document.querySelector("#stopBtn").addEventListener("click", function(){
//     clearTimeout(devtrioTimeout);
//     alert("Process Stopped!!");
// });

// setInterval(func, delay);

// const sayMe = function(){
//     console.log("Lets learn ASYNC JS with Devtrio");
// }

// const myInterval = setInterval(sayMe, 3000);

// const sayMe = function(){
//     console.log("Welcome in Devtrio", Date());
// }

// const myInterval = setInterval(sayMe, 3000);
// // clearInterval(myInterval);
// document.querySelector("#stopBtn").addEventListener("click", function(){
//     clearInterval(myInterval);
//     alert("Process Stopped!!");
// });

// const sayHello = function(name){
//     console.log(name, Date());
// }

// setInterval(sayHello, 2000, "Devtrio");
// setInterval(func, delay, arg1...);

// Promises in JS
const promiseOne = new Promise(function(resolve, reject){
    // async data fetching database
    setTimeout(function(){
        console.log("Data fetched successfully");
        resolve();
    }, 4000);
})

promiseOne.then(function(){
    console.log("Promise is resolved");
})

new Promise(function(res, rej){
    setTimeout(function(){
        console.log("Data fetched successfully");
        res();
    }, 5000);
}).then(function(){
    console.log("Promise is resolved");
});

const fetchData = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            productId: 101,
            productName: "Laptop",
            price: 45000
        });
    }, 3000);
});

fetchData.then(function(product){
    console.log("Product Data:", product);
});

let pizzaKhilaya = false;

new Promise(function(res, rej){
    if(pizzaKhilaya){
        return res("Pizza Khilaya, Thank you Devtrio");
    } else{
        return rej("Pizza Nahi Khilaya, I'm Angry");
    }
}).then(function(data){
    console.log("Success:", data);
}).catch(function(data){
    console.log("Error:", data);
});

let number = Math.round(Math.random()*10); 
console.log("Generated Number:", number);

new Promise(function(res, rej){
    if(number <= 5){
        return res("Wada pura hua");    
    }else{
        return rej("Wada pura nahi hua");
    }
}).then(function(data){
    console.log("Success:", data);
}).catch(function(data){
    console.log("Error:", data);
});