import { employees } from "./data.js";


// const fullNamesOfEmp = employees.map((item)=> (
//     {
//         fullName: `${item?.firstName} ${item?.lastName}`, ...item
//     }
// ))

// console.log(fullNamesOfEmp);


// const ITDepartEmp = employees.filter((item)=>(
//     item.department === "IT" && item.age < 40
// ))

// console.log(ITDepartEmp)

// const filterEmp = employees.filter((item)=>(
//     item.salary >= 40000 && item.salary <= 60000
// ))

// console.log(filterEmp)


// const financeEmp = employees.filter((item)=> item?.department === "Finance")
// console.log(financeEmp)

// const totalSalary = financeEmp.reduce((acc,curr)=>(acc+curr.salary),0)

// console.log(totalSalary)


// const totalSalary = employees
//                     .filter((item)=> item?.department === "Finance")
//                     .reduce((acc,curr)=>(acc+curr.salary),0)

// console.log(totalSalary)


const EmpWithBonus = employees.map((item) => (
    {
        name: `${item?.firstName} ${item?.lastName}`,
        salary: item.salary,
        bonus: item.salary * 0.25
    }
))

console.log(EmpWithBonus)