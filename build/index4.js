"use strict";
class Department {
    constructor(n) {
        this.country = "India";
        this.employees = ['abc'];
        this.fullName = n;
    }
    describe() {
        console.log(`Department:${this.fullName}`);
    }
    addEmployee(employeeName) {
        this.employees = employeeName;
    }
    setName(a) {
    }
    information() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
let admin = new Department('Admin');
admin.describe();
console.log(admin);
admin.addEmployee(['abc1', 'abc2']);
// admin.emplyoees
// admin.employees.push('abc')
// admin.country
//Inehritance
// class Father {
//     public firstName: string;
//     protected lastName: string;
//     private city:string ="pune"
//     constructor (firstName:string,lastName:string){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Son extends Father {
//     SonName:string
//     constructor (firstName:string,lastName:string,sName:string){
//         super(firstName,lastName)
//         this.SonName =sName
//     }
//     display(){
//         console.log(this.SonName + this.lastName)
//         console.log(this.lastName)
//         super.display()
//     }
// }
// let shubham = new Son("pandurang","kamble","shubham")
// shubham.display()
// shubham.lastName
