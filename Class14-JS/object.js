var studentName = "Ashar";
var students = ["Ashar", "Owais", "Jahangir", "Danyal"];
var ages = [1, 2, 3, 4, 5, 6]


var student1 = {
    firstName: "Ashar",
    lastName: "Ahmed",
    age: 26,
    courses: ["MERN AI", "NEST JS", "NEXT JS"]
}

var student2 = {
    firstName: "Owais",
    lastName: "Khan",
    age: 25,
    courses: ["MERN AI", "NEST JS", "React Native"]
}

var students = [
    {
        firstName: "Ashar",
        lastName: "Ahmed",
        age: 26,
        courses: ["MERN AI", "NEST JS", "NEXT JS"]
    },
    {
        firstName: "Owais",
        lastName: "Khan",
        age: 25,
        courses: ["MERN AI", "NEST JS", "React Native"]
    }

]


// console.log(student1.firstName)
// console.log(`${student2.firstName} ${student2.lastName}`)

// console.log(students[1].firstName)



var student3 = {
    firstName: "Jahangir",
    lastName: "Malik",
    age: 27,
    courses: ["MERN AI", "NEST JS", "NEXT JS"],
    getFullName: function (){
        return `Student Name: ${this.firstName} ${this.lastName} and Age: ${this.age}`
    }
}

student3.phone = "035446546" // for add new property

// delete student3.age // for remove existing property

// console.log(`Student Name: ${student3.firstName} ${student3.lastName} and Age: ${student3.age}`)

// console.log(student3.getFullName())