
// localStorage.setItem("name", "Ashar") // set value in localstorage
// localStorage.setItem("age", 26)

// var name =  localStorage.getItem("name"); // get value from localstorage
// var age =  localStorage.getItem("age"); // get value from localstorage

// console.log(name)
// console.log(age)

// localStorage.removeItem("age") // for removing data from localstorage

// localStorage.clear() // remove all data from localstorage


function signup(event){
    event.preventDefault()

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    localStorage.setItem("email", email);
    localStorage.setItem("password", password)

    location.href = "./home.html"
}