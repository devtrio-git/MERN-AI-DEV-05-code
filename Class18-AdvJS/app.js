
// function printName(name){
//     return `Name: ${name}`;
// }

// function higherOrderFuntion(fn, value){
//     return fn(value)
// } 

// console.log(higherOrderFuntion(printName, "Ashar Ahmed"))


const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(function(item, index){
//     return item * 10
// });

// const doubled = numbers.map((item, index)=>{
//     return item * 10
// });

// const doubled = numbers.map((item)=>(item * 10));

// const doubled = numbers.map((item)=>item * 2);

// console.log(doubled);

const users = [
    {fname: "Ashar", lname: "Ahmed"},
    {fname: "Owais", lname: "Ahmed"},
    {fname: "Jahangir", lname: "Malik"},
]

// const users = [
//     {fullName: "Ashar Ahmed"},
//     {fullName: "Owais Ahmed"},
//     {fullName: "Jahangir Malik"},
// ]

const usersFullName = users.map((item)=> (
    {fullName: `${item?.fname} ${item?.lname}`, ...item}
))
// const usersFullName = users.map((item)=> {
//     return {fullName: `${item?.fname} ${item?.lname}`, ...item}
// })

// console.log(usersFullName)

// const ages = [90,100,20,70,10,30];

// const oldAges = ages.filter((item)=>(
//     item > 50
// ))

// console.log(oldAges)

// const nums = [10, 20, 30, 40];

// const total = nums.reduce((prev,item)=>(prev+item),0)

// console.log(total); // 100

// Step-by-step:

// Start: acc = 0

// Step1: acc = 0 + 10 = 10

// Step2: acc = 10 + 20 = 30

// Step3: acc = 30 + 30 = 60

// Step4: acc = 60 + 40 = 100

// Output = 100