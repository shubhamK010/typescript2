// //static method

// class Employee{

//     id:number;
//     country:string;
//     year:number
//     static currentYear =2022

//     constructor(id:number,country:string){
//         this.id= id
//         this.country = country
//         this.year = Employee.currentYear


//     }

//     static CreateEmoplyee (name:string){
//         return {fullName:name}

//     }
// }

// let pravin=new Employee(10,"India")
// console.log(pravin)






// console.log(Employee.currentYear)
// console.log(Employee.CreateEmoplyee("shubham kamble"))

// console.log(Math.PI)
// console.log(Math.floor(10.235))


//singleton pattern

// class Accounting{
//     id:number;
//     reports:string;
//     private static instance:Accounting

//     private constructor(id:number,reports:string){
//         this.id= id
//         this.reports= reports
//     }

//     static getInstance(){
//         if(Accounting.instance){
//             return this.instance
//         }
//         this.instance = new Accounting(10,"abc")
//         return this.instance
//     }

// }

// let a1=Accounting.getInstance()
// console.log(a1)

// let a2 = Accounting.getInstance()
// console.log(a2)

// // let a1=new Accounting(10,"abc")
// // let a2=new Accounting(10,"abc")

// // console.log(a1)
// // console.log(a2)


// interface Person {
//     nameq:string;
//     age:number;
//     greet(word:string):void
// }

// let user:Person ={
//     nameq:"shubham",
//     age:20,
//     greet:(word:string)=>{
//         console.log(word)
//     }

// }
// //type

// type PersonZ= {
//     nameq:string;
//     age:number;
//     greet(word:string):void
// }

// let user2:PersonZ ={
//     nameq:"shubham",
//     age:20,
//     greet:(word:string)=>{
//         console.log(word)
//     }

// }



// type abc = string|boolean|number


// interface GreetableS {
//     name:string
//     greet(word:string):void
//     display(word:string):void
// }

// interface Year {
//     year:string
   
// }

// class PersonJJ implements GreetableS,Year {
//     name: string
//     year:string
//     age=30
//     constructor(name:string,year:string){
//         this.name= name
//         this.year = year

//     }

//     greet(word:string):void{
//         console.log(`${word} ${this.name}`)
//     }

//     display(year:string){
//         console.log(year)
//     }
// }

// let pravinJ=new PersonJJ("pravin",'2022')
// console.log(pravinJ)

// pravinJ.greet("hello")
// pravinJ.display("2023")



//readonly in interface


// interface Employee{
//     readonly empCode:number;
//     empName:string;
// }

// let empObj:Employee={
//     empCode:10,
//     empName:"Pravin"
// }

// empObj.empCode =200



