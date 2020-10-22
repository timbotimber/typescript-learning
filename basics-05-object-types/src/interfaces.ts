// Interfaces allow us to type check if objects have a specific structure 

// interfaces are clear: they give us the best way to set types to objects and classes 


// Interfaces offer a contract to a class that gives them types to adhere to.

// you can also interface functions:
// this... type AddFn =(a: number, b: number) => number
// would look like this...

interface AddFn {
    (firstArgument: number, secondArgument: number): number
}

let addFunc: AddFn

addFunc = (n1, n2) => {
    return n1 + n2
}

console.log(addFunc(4,5))

interface Named {
    readonly name: string
    outputName?: string
    hobby?: string
}

interface Greetable extends Named {
    greet(phrase: string): void 
}



class Person implements Greetable {
    name: string;
    age: number
    hobby?: string 

    constructor(n: string, age: number, hobby?: string) {
        this.name = n
        this.age = age

        if (hobby) {
            this.hobby = hobby
        }


    } 

    greet(phrase: string) {
        if (!this.hobby) {
            console.log(`${phrase} ${this.name}`)
        } else {
            console.log(`${phrase} ${this.name} loves ${this.hobby}`)
        }
       
    } 
}

// we can define the type as the interface which gives objects specific values  

let user1: Greetable

user1 = new Person("Alfalsy", 56 ) 

// user1.name = "cats"

user1.greet("whatup, ")

console.log(user1)