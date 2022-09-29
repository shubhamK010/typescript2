"use strict";
// type Admin ={
//     name:string
//     privilage:string[]
// }
let a1 = 100;
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
let a11 = add(10, "kamble");
console.log(a11);
let a12 = add('abc', 20);
console.log(a12);
let a13 = add('shubham', "kamble");
console.log(a11);
//yachya madhe common property gheu naka different properties ghya donhi type madhlya
// type Admin ={
//     name:string
//     privilage:string[]
// }
// type Employee ={
//     name:string
//     startDate:Date
// }
// type CalEmployee = Admin | Employee
// function printInfo1(emp:CalEmployee){
//     if('privilage' in emp){
//         console.log(emp.privilage)
//     }
//     else if('startDate' in emp){
//         console.log(emp.startDate)
//     }
// }
// printInfo1({name:"shubham",startDate:new Date()})
// printInfo1({name:"shubham",privilage:['abc1','abc2']})
