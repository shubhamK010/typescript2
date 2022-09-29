
// class Car {
//     drive() {
//         console.log('Driving .....Car')
//     }
// }
// class Truck {
//     drive() {
//         console.log('Driving .....Truck')
//     }
//     loadTruck(quantity: number) {
//         console.log(quantity)
//     }
// }
// type VehicleQ = Car | Truck

// let v1 = new Car();
// let v2 = new Truck()

// function useVehicle(veh: VehicleQ) {
//     veh.drive()
//     // if ('loadTruck' in veh) {
//     //     veh.loadTruck(1000)
//     // }

//     if(veh instanceof Truck){
//         veh.loadTruck(1000)
//     }

// }
// useVehicle(v1)
// useVehicle(v2)

//next program 

// interface Bird{
//     type:'bird';
//     flyingSpeed:number  
// }  

// interface Tiger{
//     type:'tiger'
//     runningSpeed:number  
// }   

// type Animal = Bird|Tiger
// function animalMovenment(animal:Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed = animal.flyingSpeed
//             break;
//         case 'tiger':
//             speed = animal.runningSpeed
//             break
//         default:
//             console.log('Incorrect')
//     }
//     console.log(speed)
// }

// animalMovenment({type:'bird','flyingSpeed':10})
// animalMovenment({type:'tiger','runningSpeed':10})









///////////////////////////////////////////////////////////////////////////////////////////////
//in index.html file in <body>

// <p> Para </p>
////////////////////////////////////



//in ts file



// let a111 = document.querySelector('p')
// let a1112 = document.querySelector('input')!

// a111.value
// a1112.value


//in index.html file in <body>

// <input type = "text">
// <input type = "text" id="two">


//in ts file

// let a1113=document.querySelector('#two')! //yaha pe khali element dikhata hai..kyuki tag name se id se element select kiya hai
                                            //isliye hum type casting use karte hai

// a1113.value


//solution to this

// let a1113=<HTMLInputElement>document.querySelector('#two')!

// a1113.value


// let a1114= prompt() //yaha pe typecasting karne ke zroorat nahi hai kyuki wo inbuilt hai




////////////////////////////////////////////////
//in index.html file in <body>


// <img alt = "a" src=" abc" id = "three">


//in ts file

// let a1115=document.querySelector('img') // agagr html page pe img naam ka tag nahi mila toh null ata hai

// a1115.alt


//solution to problem statement
// let a1115=<HTMLImageElement>document.querySelector('img')

// a1115.alt