console.log("DOM")
//  DOM: Document Object Model 
    //   getElementById, getElementByClassName, getElementByTagName, querySelector, querySelectorALl
// For ID always use # & for Class use dot(.)
// innerText & innerHTML
// document.getElementById("paragraph").innerText = "This is paragraph using getElementById";

// document.getElementById("paragraph").innerHTML = "<h1>This is paragraph using getElementById</h1>";

// // query selector : WildCard
// document.querySelector("#myHeading").innerText = "This is heading using querySelector";

// let myDiv = document.getElementById("myDiv");
// console.log(myDiv);

// // let greenItems = document.getElementsByClassName("green");
// // let greenItems = document.querySelector(".green"); // returns first matching element
// let greenItems = document.querySelectorAll(".green"); // returns all matching element
// console.log("Elements having green color", greenItems);

// // let allPara = document.querySelectorAll("p"); // returns all matching element
// let allPara = document.getElementsByTagName("p"); // returns all matching element
// console.log("All PAra", allPara);

// DOM WITH FORM Inputs
function register(){
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;

    if(userEmail === "" && userPass === ""){
        alert("Please fill all the details");
    }
    else if(userEmail == "admin@gmail.com" && userPass == "admin123"){
        alert("Admin Login Successful");
    }else{
        alert("Your email is " + userEmail + " and password is " + userPass);
    }
}

// addEventListener
let myBtn = document.querySelector("#myBtn");

function displayDate(){
    document.getElementById("currDateTime").innerHTML = Date();
}

myBtn.addEventListener("dblclick", displayDate);













