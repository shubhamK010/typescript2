class PersonC {
    // public firstName:string;
    // public lastName:string;
    constructor(public firstName:string, public lastName:string){
        // this.firstName = firstName
        // this.lastName = lastName
    }
    display(){
        console.log(this.firstName+ this.lastName)
    }
}
let  obj1 = new PersonC("gauri","kanhe")
obj1.display()

// class PersonD{
//     constructor(private firstName:string , private lastName:string){
//     }
//     displayName(){
//         console.log(this.firstName,this.lastName)
//     }

// // getter

// getName(){
//     return this.firstName
// }
// // setter method

// setName(firstName:string){
//     this.firstName = firstName
// }

//     get getName(){
//         return this.firstName
//     }

//     set setName(firstName:string){
//         this.firstName = firstName
//     }



// }

// let  obj2 = new PersonD("chinmay","deshpande")
// console.log(obj2.getName())
// obj2.setName("ram")
// console.log(obj2.getName())

// console.log(obj2.firstName)
// obj2.firstName = "chinmay" 

// console.log(obj2.getName)
// obj2.setName = "ram"
// console.log(obj2.getName)

// ---------------------------------------------------------------->
// class Vehicle {
//     constructor(private color:string){
//     }

//     displayColor(){
//         console.log(this.color)
//     }

//     //get
//     get getColor(){
//         return this.color
//     }

//     set setColor(color:string){
//         this.color = color
//     }

// }

// let obj3  = new Vehicle("blue")
// console.log(obj3.getColor)
// // obj3.setColor("red")
// // console.log(obj3.getColor)
// obj3.setColor = "black"
// console.log(obj3.getColor)


// Inheritance

// class FatherA {

//     public firstName: string
//     public lastName: string
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName

//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }


// class SonA extends FatherA {
//     public sonName: string
//     constructor(firstName: string, lastName: string, sonName: string) {
//         super(firstName, lastName)
//         this.sonName = sonName
//     }

//     displayName() {
//         console.log(this.sonName + this.lastName)
//         super.displayName()
//     }

// }

// let chinmayA = new SonA("chinmay","deshpande","shirish")

// Abstract

// Mobile --- + - 

// abstract class WorldBank {
//     abstract loan(interest:number):void;
//     abstract save(interest:number):void;

//     country(){
//         console.log('India')
//     }
// }

// class SBI extends WorldBank{
//     loan(interest:number){
//         console.log(`Hello i am sbi loan interest ${interest}`)
//     }
//     save(interest:number){
//         console.log(`Hello i am sbi saving interest ${interest}`) 
//     }

// }

// class ICIC extends WorldBank{
//     loan(interest:number){
//         console.log(`Hello i am ICIC loan interest ${interest}`)
//     }
//     save(interest:number){
//         console.log(`Hello i am ICICI saving interest ${interest}`) 
//     }
// }

// //let wb = new WorldBank()
// let sbi = new SBI()

// we cannot create object of abstract class
// if abstract class is having abstract methods , those who inherit abstract class need to 
// give definition for methods
// abstract class can have abstract and and non abstract method
