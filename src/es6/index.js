function newFunction(name,age,country){
    var name = name || 'Ariel'
    var age = age || 20
    var country = country || 'AR'
    console.log(name,age,country)
}

//es6
function newFunction2(name='Ariel',age=20,country='AR'){
    console.log(name,age,country)
}

newFunction();
newFunction2()


let hello = 'hello'
let world = 'world'
let epicFrase = hello+' '+world
console.log(epicFrase)
let epicFrase2 = `${hello} ${world}`
console.log(epicFrase2)

let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' 
+ 'Lorem Ipsum has been the industrys standard dummy'
console.log(lorem)
//es6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy`
console.log(lorem2)

let person = {
    'name': 'oscar',
    'age': 20,
    'country':'AR'
}
console.log(person.name)
//es6
let {name,age,country} = person

console.log(name,age,country)


let team1 = ['Alguien', 'alguien2', 'alguien3']
let team2 = ['Alguien4', 'alguien5', 'alguien6']

let education = ['alguien7',...team1,...team2]
console.log(education)
//es5
{var  globalVar = "Global Var"}
//es6
{let globalLet = 'Global Let'
console.log(globalLet)}
console.log(globalVar)

const a = "b"


const names = [
    {name:'Ariel',age:20},
    {name:'Jesus',age:20},
    {name:'Magui',age:20},
    {name:'Ariel2',age:20},
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 =  (name,age,country)=> {

}



const helloPromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Hey')
        }else{
            reject('upss')
        }
    })
}

helloPromise().then(response => console.log(response))
.catch(error => console.log(error))

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator()
console.log(calc.sum(2,3))


import {hello} from './module'

hello()

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World'
    }
}

const generatorHello = helloWorld()

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
