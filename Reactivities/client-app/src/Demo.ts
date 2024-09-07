interface duck {
    name : string,
    numbLegs : number,
    makeSound: (sound:string) => void 
}
const  duck1 :duck= {
    name : "huey",
    numbLegs :2, 
    makeSound: (sound : string)=> console.log(sound)
}
let  duck2 :duck = {
    name : "duey",
    numbLegs :2,
    makeSound: (sound : string)=> console.log(sound)
}
duck1.makeSound("quack")
duck2.makeSound("sound")
duck1.name = "das"
export const ducks = [duck1, duck2]