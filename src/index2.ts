
// //  let marks:number[] =[10,20,30]
// //  let names:string[] =['shubham','pravin']

// let info4:{
//     firstName:string,
//     lastName:string,
//     age:number
//     skills:[number,string,boolean]
// }={

//     firstName:'shubham',
//     lastName:'kamble',
//     age:20,
//     skills:[20,'abc',true]
    
// }

// // info4.skills.push(41021,'fgd',true) //exception
// // console.log(info4)


// union function

// function addition(x:number|string,y:number|string){
//     // console.log(x+y)
//     if(typeof x == 'number' && typeof y == 'number'){
//         console.log(x+y)
//     }
//     else{
//        console.log( Number(x)+ Number(y))
//     }

// }

// addition(10,20)
// addition('10','20')


//Union

// type Result = string|number|boolean

// let a:Result  = true
// let b:Result= true


//literals 

// type firstName = 'shubham' | 'pravin'|'Arjun'
// type lastName = 'kamble' | 'shelar'


// let info5:{
//     firstName:firstName
//     lastName: lastName
// }={
//     firstName:'Arjun',
//     lastName:'shelar',
    
// }


//enum

// let activity1 = 'sleeping';
// let activity2 = 'walking';
// let activity3 ='runnig';
// let activity4 = 'eating'

// enum Activity {
//     'sleeping',
//     'walking',
//     'runnig',
//     'eating'
// }


// if(Activity.sleeping){
//     console.log('you have to wake up early')
// }

// if(Activity.eating){
//     console.log('you have to digest it')
// }

// if(Activity.runnig){
//     console.log('you will be fit')
// }



