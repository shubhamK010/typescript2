// function additon(x:number,y:number):void{
//     console.log(x+y)
// }

// additon(10,20)

// function additon(x:number,y:number):undefined{
//     console.log(x+y)
//     return;
// }

// additon(10,20)



function additon(x:number,y:number){
    return x+y
}

// function displayResultA(x:number,y:number,fn:Function){
//     console.log(`Result of sum ${fn(x)}`) //number+undefined = NaN
    
// }
// displayResultA(10,20,additon)

function displayResultA(x:number,y:number,fn:(x:number,y:number)=>number){
    console.log(`Result of sum ${fn(x,y)}`) //number+undefined = NaN
    
}
displayResultA(10,20,additon)


//class

// class Person {

//     name:string = 'pravin'
// }

// let student = new Person()
// console.log(student.name)



// class Person{
//     private age:number=10
//     private firstName:string;

//     public constructor(name:string){
//         this.firstName =name;

//     }
//         // getter method -- to get value--- to retrive value

//         public getName():string{
//             return this.firstName
//         }

//         //setter -- to set value -- to update value

//         public setName(a:string){
//             this.firstName =a
//         }


// }
// let abc = new Person("shubham")

// console.log(abc.getName())
// abc.setName("pravin")
// console.log(abc.getName())


