"use strict";
// Generics
// let names:Array<string> = ["hello","bye","hi"]
// let qq = names[0].toUpperCase()
// console.log(qq)
// // Promise
// // Program2
// let pro = new Promise<string>(function(resolve,reject){
//     setTimeout(function(){
//         resolve('hello')
//     },2000)
// })
// pro.then(function(e){
//     console.log(e.includes('h'))
// })
//program 3
//problem statement 1
// function merge(objOne:Object,objTwo:Object){
//    return  Object.assign(objOne,objTwo)
// }
// let a21= merge({fname:"ram"},{age:12}) 
// a21.fname     //ye yaha pe mujhe error de raha hai..lekin hona to chahiye wha pe
//Problem statement 2--->its like we are hardcoding it
function merge(objOne, objTwo) {
    return Object.assign(objOne, objTwo);
}
let a21 = merge({ fname: "ram" }, { age: 12 });
a21.fname; //ab ye to error chala jayega kyuki upar maine values hardcode karke rakhi hai 
// let a211=merge({rollNo:50},{isMarried:true}) //ab aisa new parameter pass karte samay pe rollNo ki value send kar raha hu to wo error dega kyuki upar maine uski value set nahi ki hai...aur dusre code ko hardcode karke rakha haiS
//but ye sahi tarika nahi
//kyuki mujhe yeh chahiye ki niche se kuch bhi jaaye phir bhi mera control mere result pe rahe..aur mai result pe kuch karu to mujhe error nhi aana chahiye
//kyuki mai uper normally object likh raha tha to mujhe error de raha tha isilye maine specify karke rakha hai ki object ka type ek specific hona chahiye..lekin wo bh iek galat tarika hai
//mhnje mala hardcode pan nahi karaych ahe ani me khalun je kahi send karel te chall pan oahije tya sathi je khalun send karnar ahet tyacha type tumhi swatah mention karun theva ....T extends Object , u extends Object..fakt ithe condition hich ahe ki T ha object lach extend zala pahije ani U pan object lach extend zala pahije 
// function merge<T extends Object,U extends Object>(objOne:T,objTwo:U){
//     return Object.assign(objOne,objTwo)
// }
// let a21 = merge({fname:"ram"},{age:12})
// // let a22= merge({roll:10},{isMarried:true})
// let a23 =  a21.fname
// let a24 = a21.age 
//ithe ek gosht typeScript la samjun geli ti mhnaje------>
//T---->{fname:string}
//U---->{age:number}
//mhnje apan je khalun parameter pass kartoy tyala te infer kartey
//tasech typescript la he pan samjley
//T&U--->{fname:string,age:number}
//mhnaje tumhi khalun function call kartana parameter madhe kontihi property dya tumhala war T extends object ch lihl pahije
//ithe war extend Object lihlay na tyala constatnt mhntat
//next program
//problem statement
// function countAndDescribe<T>(element:T){
//     console.log(element.length) //yahe pe erro de raha hai
// }
// countAndDescribe("hello")
// countAndDescribe([11,22,33,44,55,66])
// countAndDescribe(10) // ab iska length to nahi niklega
// to yaha niche se aapko typescript ko batana hai ki niche se jo parameter aap send kar rahe ho uski property length honi hi chhiye..uske liyte T extends lengthy likha hai
//uske liye ek interface likhna hota hia
//solution tu problem statement
// interface Lengthy{
//     length:number
// }
// function countAndDescribe<T extends Lengthy>(element:T){ //T ko yaha pe interface se ectend kiya hai
//     console.log(element.length)
// }
// countAndDescribe("hello")
// countAndDescribe([11,22,33,44,55,66])
// countAndDescribe(10) // ab iska length to nahi niklega kyuki ispe length nahi nikal sakti
//aur ek problem statement--->mai yah pe extends ki jagah pe diectly type define kar deta..aur inteface ki jaha type de deta
//but this is  restricted for array and string....aur yeh khali any array or string ke liye chalega....aur yeh hardcode karne jaisa hai isilye yeh use nahi karna chahiye
//phir agar kal jaake document.querySelector se node list aati to hum fas jaate..error milta..
//isliye khud type jaise ki upar wale code me likha hai waise define kar sakte hai hum
// type Sa = any[]|string
// function countAndDescribe(element:Sa){
//     console.log(element.length)
// }
// countAndDescribe("hello")
// countAndDescribe([11,22,33,44,55,66])
//countAndDescribe(10)
