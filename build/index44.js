"use strict";
//Program 1
// class Deparment {
//     fullName:string ;
//     constructor(n:string){
//         this.fullName = n;
//     }
//     describe(){
//         console.log(`Department:${this.fullName}`)
//     }
// }
// let admin = new Deparment('Admin')
// admin.describe()
// console.log(admin)
// let admin2 = {
//     fullName:"Accouting",
//     describe:admin.describe
// }
// admin2.describe()
//program 2
//change on line no 37
// class Deparment {
//     public fullName:string ;
//     private employees:string[] = []
//     constructor(n:string){
//         this.fullName = n;
//     }
//     describe(){
//         console.log(`Department:${this.fullName}`)
//     }
//     addEmployee(employeeName:string){
//         this.employees.push(employeeName)
//     }
//     information(){
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
// let admin = new Deparment('Admin')
// admin.addEmployee("chinmay")
// admin.addEmployee('shirish')
// console.log(admin)
// admin.employees
// admin.employees
// //problem statement -- emplyees private hai isiliye uska array print nhi kar sakte aur usme elemnts update nhi kar sakte
// //private fields cannot be accesssed outside class
// //use getter and setter method to access same
// admin.employees()
// admin.employees.push('sk')
//solution to problem--- line no 45 aur 49 ka function
// public
//yaha mai fullName ki value update kar sakta kyuki ye fullName public hai
// admin.fullName = "Accounting"
//Program 3
// class Deparment {
//     public fullName:string ;
//     private employees:string[] = []
//     constructor( n:string){
//         this.fullName = n;
//     }
//     describe(){
//         console.log(`Department:${this.fullName}`)
//     }
//     addEmployee(employeeName:string){
//         this.employees.push(employeeName)
//     }
//     information(){
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
//typescript me read only naam ki method hai..agar read onlty hum kisi variable ke samne lagate hai to uski value hum baad me update nahi kar sakte
//at line no 115
// class Deparment {
//     public readonly country = "india"
//     public fullName:string ;
//     private employees:string[] = []
//     constructor( n:string){
//         this.fullName = n;
//     }
//     describe(){
//         console.log(`Department:${this.fullName}`)
//     }
//     addEmployee(employeeName:string){
//         this.employees.push(employeeName)
//     }
//     information(){
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
// public
// let admin = new Deparment('Admin')
// admin.country = "abc"  //yeh hum nahi kar sakte
//Q.What is difference between constant and read only?
//Ans. const variables can declared in methods ,while readonly fields cannot be declared in methods. const fields cannot be used with static modifier, while readonly fields can be used with static modifier. A const field is a compile-time constant, the readonly field can be used for run time constants.
//for second file
// class Father {
//         firstName:string;
//         lastName:string;
//     constructor(firstName:string,lastName:string){
//         this.firstName = firstName
//         this.lastName= lastName
//     }
//     display(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class Son extends Father{
//         SonName:string                                            //2
//     constructor(firstName:string,lastName:string ,sName:string){    //1
//         super(firstName,lastName)
//         this.SonName = sName                                         //2
//     }
//     display(){
//         console.log(this.SonName+this.lastName)
//         console.log(this.lastName)
//         super.display()     //yaha hum parent ki method call kar rahe hai
//     }
// }
// let abc= new Son("shirish","deshpande","chinmay")
// abc.display()
// class Father {
//     public firstName:string;
//     protected lastName:string   //agar aap koi cheej protected rakhte ho java me to wo same package me rehti hai
//     //protected class ka matlab ye hai ki jo is Father class ke sath relationship me haiwaha pe aap isko access kar sakte ho...but problem statement is aap bahar access kar sakte ho ki nahi yeh dekhna hai mujhe.
//     //protected means it can be accessed within relationship and not outside..matlab mai bahar se accesss nahi kar paunga lekin agar class ke sath relationship me hai to waha class me access kar paunga
//     private city:string = "wardha"
//     constructor(firstName:string,lastName:string){
//         this.firstName = firstName
//         this.lastName= lastName
//     }
//         // 4
//     display(){
//         console.log(this.firstName+this.lastName) //4 // yaha pe hum private ko add kar sakte hai..because it its original class hai
//     }
// }
// class Son extends Father{
//     SonName:string
//     constructor(firstName:string,lastName:string ,sName:string){
//         super(firstName,lastName)
//         this.SonName = sName
//     }
//     display(){                                    //3
//         console.log(this.SonName+this.lastName) //yaha pe city nahi aayega kyuki ye classke bahar likha hai...jab mai +this.city karne jaata hu to nahi ayega
//         console.log(this.lastName)
//         super.display()
//     }
//     //4
//     //agar koi cheej private hai to bhale hi wo inherit hua ho phir bhi wo class me access nahi hoga//means private will stick to its original class only
//     //matlab private wali cheej extend wale class me access nahi hogi
//     //public matalb it is accesible everywhere
// }
// let chinmay = new Son("shirish","deshpande","chinmay")
// chinmay.display()
//5
//protected ko call karna hai
// chinmay.lastName  // hum yaha nhai call kar sakt because public protected hai//aur hum yaha class ke bahar access karne ka try kar rahe hai..lekin inherit kiye hue class me protected accesible hai
//conclusion in--->javascript
//private --> access only in its original class
//protected class-->accesed only in its original class and in extended class/inherited class
//public ---> accessed in original class,in extended class/inherited class  and outside class
//conclusion in java--->
//agar aap koi cheej protected rakhte ho to pure package me accesible rehti hai..dusre package me accesible nahi rehti
//Q.method overloading js me support kyu nhi karta?
//Ans.iska answer interviewer ko hi pucho
//Q.private keyword js me support kyu nahi karta?
//Ans.because private keyword javascript walo ne introduce nhi kiya hai unke compiler me
//same asech overloading pan introduce nahi kelel...but over the period they will introduce it
