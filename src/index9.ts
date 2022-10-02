
// let names:Array<string>=["tushar","pravin","shubham"]
// let qq=names[0].toUpperCase()
// console.log(qq)


// let pro= new Promise<string>(function(resolve,reject){
//     setTimeout(function(){
//         resolve("hello")
//     },2000)

// })
// pro.then(function(e){
//     console.log(e.includes('h'))
// })


// function merge(objOne:Object,objTwo:Object){
//     return Object.assign(objOne,objTwo)
// }

// let a211=merge({fName:"ram"},{age:20})
// a211.age

// function merge(objOne:{fName:"ram"},objTwo:{age:20}){
//     return Object.assign(objOne,objTwo)
// }

// let a211=merge({fName:"ram"},{age:20})
// a211.fName
// let a222=merge({lName:"kamble"},{isMarried:true})

// solution


// function merge<T extends Object,U extends Object>(objOne:T,objTwo:U){
//     return Object.assign(objOne,objTwo)
// }

// let a211=merge({fName:"ram"},{age:20})
// console.log(a211.fName)
// let a222=merge({lName:"kamble"},{isMarried:true})
// console.log(a222.isMarried)

// //T---> {fName:"ram"}
// //U---->{age:20}
// //T & U----> {fName:"ram"},{age:20}



// function countAndDescribe<T >(element:T){
//     console.log(element.length)
// }
// countAndDescribe("hello")
// countAndDescribe([10,20,30,40])
// countAndDescribe(10)


interface Lengthy{
    length:number
   
}

function countAndDescribe<T extends Lengthy>(element:T){
    console.log(element.length)
}
countAndDescribe("hello")
countAndDescribe([10,20,30,40])
// countAndDescribe(10)

// type Sa= any[]|string

// function countAndDescribe(element:Sa){
//     console.log(element.length)
// }
// countAndDescribe("hello")
// countAndDescribe([10,20,30,40])
// countAndDescribe(10)
