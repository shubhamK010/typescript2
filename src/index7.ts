
// type Admin ={
//     name:string
//     privilage:string[]
// }

// type Employee ={
//     name:string
//     startDate:Date
// }

// type CalEmployee = Admin & Employee

// let h1:CalEmployee ={
//     name:"Pravin",
//     privilage:['pravin1','pravin2'],
//     startDate: new Date()
// }


type com =string|number|boolean
type com2 = boolean|number
type universal = com & com2

let a1:universal =100


// type guard

function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:string,b:number):string
function add(a:number,b:string):string

function add(a:com,b:com){

    if(typeof a === 'string' && typeof b === 'string'){
        return a.toString() + b.toString()
    }
    else if(typeof a === 'string' && typeof b === 'number'){
        return a+b
    }
    
    else if(typeof a === 'number' && typeof b === 'string'){
        return a+b
    }
    else if(typeof a==='number' && typeof b === 'number'){
            return a+b
        }
    }



let a11=add(10,"kamble")
console.log(a11)
let a12=add('abc',20)
console.log(a12)
let a13=add('shubham',"kamble")
console.log(a11)



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

