// What are static method and properties
//static method ya property accesss karne ke liye object likhne ki zaroorat nahi hai
//means you dont need to create object to access static method or property


//step 1

// class Employee {

//     static currentYear = 2022

//     static CreateEmployee (name:string){
//         return {fullName:name}
//     }

// }

// console.log(Employee.currentYear)
// console.log(Employee.CreateEmployee("shubham kamble"))

// //iske pehle bhi humne koi static cheej dekhi hai kya?Ans.Yes---->Math
// //yaha par bhi hum math ka object nahi bana rahe directly className pe call kar rahe hai
// console.log(Math.PI) //yaha me math ek class hai...PI ek static property hai
// console.log(Math.floor(122.3))//yaha me math ek class hai..floor yaha pe ek method hai


//step 2
//change = add constructor and define other variables

// class Employee {
//     id:number;
//     country:string;
//     year:number
//     static currentYear = 2022    //yaha pe currentYear ek static keyword hai jo mujhe niche use karna hai..to uske liye constructor me changes kiye hai..usko hum this keyword se acces nahi kar sakte ..className se accesss karna hoga..static ka this keyword ke sath koi relation nahi rehta hai

// // yaha aap constructor ko dekho to non static hai...to is case me constructor ko call karne ke liye object banan padega
// // matlab jaise hum bahar className se access karte hai waise hi static ko andar bhi className se access karna hota hai
// // so we can say that non static thing can be called on static thing

//     constructor(id:number,country:string){
//         this.id = id
//         this.country = country
//         this.year = Employee.currentYear
//     }


//     static CreateEmployee (name:string){
//         return {fullName:name}
//     }

// }

// let pravin = new Employee(10,'India')
// console.log(pravin)
// console.log(pravin.year)


//step 3

//Single ton pattern = matlab ek class ka hum ek hi object bana sakteb hai use hi singleton pattern bolte hai...you cannot creat multiple objects of one class


// class Accounting {
//     id:number;
//     reports:string
   


//    constructor(id:number,reports:string){
//         this.id = id;
//         this.reports = reports
//     }

// }

// let account = new Accounting(10,'2022') //yaha pe pehla object ban gaya hai..yaha pe account ka type accounting hai
// let account2 = new Accounting(20,'2023') // yaha pe dusra object ban gaya hai ...agar aapko ek hi object banan hai to ye dusra wala object nahi banane dena hai
// console.log(account)
// console.log(account2)


///-------------------------//
//steps to make only one object in this singleton pattern
//1.constructor ko private bana do...uski wajah se uska bahar se object banega hi nahi
//(private constructor is not accessible outside the class)
//2.private static instance : Accounting  ye constructor ke upar likho
//(yaha pe dekhoge aap to instance naam ka variable hai..usko private ye acces modifier diya hai uske wajah se wo class me access hoga...uske baad static likha hai to usko access karne ke liye object banane ki zaroorat nh=ahi hai,aur uska type hai Accounting jo ki class ka name hai)
//3.write a static method to check same instance value
//4.if else wali condition likho.... agar instance ki value set nahi hai to set karo
//5.call the static method on class name

// class Accounting {
//     id:number;
//     reports:string
//     private static instance:Accounting //instance means example


//     private constructor(id:number,reports:string){
//         this.id = id;
//         this.reports = reports
//     }

//     static getInstance(){   //ye method likhi hai kyuki jo object create hoga usi object ko return karana hai
//         if(Accounting.instance){
//             return  this.instance  //yaha pe instance ki value abhi set nahi hai..agar set hai to hume ye 102 line pe likha hai wo return milna chahiye
//         }
//         this.instance = new Accounting(12,'20202')   //agar instance ki value set nahi hai to first time uske liye ye code likh ke value set karo
//         return this.instance         //instance ki value hum yaha pe object create karke usme parameters bhej rahe hai jo ki line no 104 pe hai
//     }

// }

// let a1 = Accounting.getInstance()
// let a2 = Accounting.getInstance()
// console.log(a1)
// console.log(a2)




//Interface part 1

//jo bhi OOPS oriented languages hoti hai usme interface dikhta hai
//interface matlab rule implement karna 
//inteface is abstract..usko hum values assign nahi kar sakte
//interface ek type ki tarah hi rahta hai..thode minor changes rehte hai..usme values assign nahi kar sakte but define kar sakte hia type ki tarah
//interface me private,public nh ichal sakte khali read only chalta hai


// interface Personq {
//     nameq:string;
//     age:number;
//     greet(word:string):void
// }

// let user:Personq = {
//     nameq:"shubham",
//     age:20,
//     greet:(word:string)=>{
//         console.log(word)
//     }
// };
// user.greet('hello')

// //ye same cheej hum type se bhi kar sakte hai ...khali usme '=' rehta hai

// type Personh = {
//     nameq:string;
//     age:number;
//     greet(word:string):void
// }

// let user2:Personh = {
//     nameq:"pravin",
//     age:30,
//     greet:(word:string)=>{
//         console.log(word)
//     }
// }

// user2.greet('good morning')


//Q.diff between interfcae and type?
//1.interface is always related with the object
//2.'=' is used in type and not in interface
//3.type me aap string ko bhi type bana sakte ho

// type greet = string|boolean|number
// type nameH = 'ram'|'sham'


//interface part 2


// interface Greetable {
//     name: string
//     greet(word: string): void
// }

// //yahe pe inheritance ki baat nahi ho rhi isliye extend ki jagah pe implements use kiya hai

// class PersonJ implements Greetable {
//     name: string
//     age = 30;
//     constructor(name: string) {
//         this.name = name
//     }
//     greet(word: string): void {
//         console.log(`${word}  ${this.name}`)
//     }
//     display(){
//         console.log('Good morning')
//     }
// }

// let pravinJ:PersonJ = new PersonJ("pravin")
// pravinJ.greet("hello")
// pravinJ.display()

//interface part 4
//yaha pe ek class me 2 inteface use kiye hai

// interface Greetablee {
//     name: string
//     greet(word: string): void
//     display(year:string):void;
// }
// interface Year {
//     year:string 
//     display(year:string):void;
// }

// class PersonJa implements Greetablee, Year {
//     name: string
//     year:string
//     age = 30;
//     constructor(name: string,year:string) {
//         this.name = name
//         this.year = year
//     }
//     greet(word: string): void {
//         console.log(`${word}  ${this.name}`)
//     }
//     display(year:string){
//         console.log(year)
//     }
// }

// let amolJa:PersonJa = new PersonJa("chinmay",'2022')
// amolJa.greet("hello")
// amolJa.display('2022')



//interface part 5
//inheritance in interface

// interface me private,public nh ichal sakte khali read only chalta hai

// interface IEmployee {
//     readonly empCode: number;
//     empName: string;
// }

// let empObj:IEmployee = {
//     empCode:1,
//     empName:"Steve"
// }

// empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'

