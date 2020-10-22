// intersection types find the common elements between 2 types and connect them

// we could use interfaces here not types
type Admin = {
name: string;
privileges: string[]

}

type Employee = {
    name: string;
    startDate: Date;
}

// if these were interfaces... 
//  interface ElevatedEmployee extends Employee, Admin {}

type badMan = Admin & Employee

const employee1: badMan = {
name: "Trevor Eve",
privileges: ["presenter", "newscaster"],
startDate: new Date()
}


type stringAndNumber = string | number
type numberAndBoolean = number | boolean

type masterOfTheUniverse = stringAndNumber & numberAndBoolean

let heMansAge: masterOfTheUniverse = 56

console.log(employee1)


// this is a type guard. It gives us the flexibility of a intersection type but makes it work at runtime with vanilla JS 
function add(a:stringAndNumber, b:stringAndNumber ) {
if (typeof a === "string" ||typeof b === "string" ) {
    return a.toString() + b.toString()
} 

     return a+ b
}


// this is a functional overload. This allows us to tell typescript what to do if certain inputs are passed in as arguments. 
function addition(a: string, b: string): string
function addition(a: number, b: number): number
function addition(a: string, b: number): string
function addition(a: number, b: string): string
function addition(a:stringAndNumber, b:stringAndNumber) {
    if (typeof a === "string" ||typeof b === "string" ) {
        return a.toString() + b.toString()
    } 
    
         return a+ b
}
  
console.log(addition("Timmy", "south park"))
console.log(addition(45, "54")) 

const fetchedUserData = {
    id: "party dude",
    name: "Michelangelo",
    job: {title: "ninja", description: "turtle"}
}

// optional chaining allows you to check if data exists before running code. The "?" here checks for the info before anything is run: 
console.log(fetchedUserData?.job?.title) 

// interestingly this is the JS output for this code: 
let _a
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);


type UnknownEmployee = Employee | Admin

// this is a type guard using the "in" method from JS

function printEmployeeInfo(employee: UnknownEmployee) {
console.log("Name" + employee.name)

if ("privileges" in employee) {
        console.log("Privileges " + employee.privileges)
    }
    if ("startDate" in employee) {
        console.log("start date: " + employee.startDate )
    }
     
    }
   

console.log(printEmployeeInfo(employee1))

// this is a type guard using the "instanceof" method from JS

class Car {
    drive() {
        console.log("Driving...")
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...")
    }

    loadCargo(amount: number) {
        console.log("Loading Cargo..." + amount)
    }
}

type Vehicle = Car | Truck

const mini = new Car()
const jeep = new Truck()

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000)
    }
}

useVehicle(jeep)


// Discriminated union types allow to check for correct interfaces 


interface Xwing {
    type: "star fighter"
    flyingSpeed: number
}

interface AtAt {
    type: "walker"
    walkingSpeed: number
}

type Machine = Xwing | AtAt

function movingMachine(machine: Machine) {
    let speed
switch (machine.type) {
    case "star fighter":
    speed = machine.flyingSpeed
    break; 
    case "walker":
    speed = machine.walkingSpeed
    break; 
}
    console.log("moving with speed: " + speed)
}

movingMachine({type: "star fighter", flyingSpeed: 500})

// Typecasting: giving a type to something that typescript might not have direct access to...Such as an element from the DOM.
// 2 ways of doing this... Firstly using crocodile brackets and specifying the type here: 
const inputElement = <HTMLInputElement>document.getElementById("user-input")

// second way of doing it is with the "as" key word: 
const inputElementAdmin = document.getElementById("admin-input")!  as HTMLInputElement

inputElement.value = "I'm a user!"

inputElementAdmin.value = "I'm the admin"

// index types: this allows us to create objects that are more flexible regarding the information they might hold 

// here we define the object structure we want to use:  
interface ErrorContainer { 
[prop: string]: string 
}

const errorBag: ErrorContainer = {
    56: "cat",
}

// backup and nullish coalescing

const userInput = false

const moreStoredData = userInput ?? "This is the value if userInput is strictly false"

const storedData = userInput || "This is the default value if userInput is a falsy value"



console.log(storedData)