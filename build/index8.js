"use strict";
// class Car{
//     drive(){
//         console.log('Driving Car')
//     }
// }
// class Truck {
//     drive(){
//         console.log('Driving Car')
//     }
//     loadTruck(quantity:number){
//         console.log(quantity)
//     }
// }
// type VehicleQ=Car|Truck 
// let v1=new Car();
// let v2=new Truck()
// function useVehicle(veh:VehicleQ){
//     veh.drive()
//     // if('loadTruck' in veh){
//     //     veh.loadTruck(1000)
//     // }
//     if(veh instanceof Truck){
//         veh.loadTruck(1000)
//     }
// }
// useVehicle(v1)
// useVehicle(v2)
// interface Bird {
//     type: 'bird'
//     flyingSpeed: number
// }
// interface Tiger {
//     type: 'tigerAA'
//     runningSpeed: number
// }
// type Animal = Bird | Tiger
// function animalMovenmentQ(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break;
//         case 'tigerAA':
//             speed = animal.runningSpeed
//             break;
//         default:
//             console.log("Incorrect value")
//     }
//     console.log(speed)
// }
// animalMovenmentQ({ type: 'bird', 'flyingSpeed': 10 })
// animalMovenmentQ({ type: 'tigerAA', 'runningSpeed': 100 })
// let a111=document.querySelector('p')
// a111.value
// let a1112=document.querySelector('input')!
// a1112.value
// let a1113=<HTMLInputElement>document.querySelector('#two')!
// a1113.value
// let a1114=prompt()!
// let a1115=document.querySelector('img')!
// a1115.alt
let a1115 = document.querySelector('img');
a1115.alt;
