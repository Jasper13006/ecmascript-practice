const obj = {
    name: 'Ariel',
    age:20,
    country:'AR'
}

let {name, ...otraDate} = obj

console.log(name, otraDate)



const obj = {
    name: 'Ariel',
    age:20,
}

const obj1 = {
    ...obj,
    country:'AR'
}

console.log(obj1)


const helloWorld = ()=>{
    return new Promise((resolve,reject)=>{
        (false)
        ? setTimeout(()=> resolve('Hello world'),3000)
        : reject(new Error('test error'))
    })
}

helloWorld()
.then(res=> console.log(res))
.catch(err => console.log(err))
.finally(()=> console.log('finalizao'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(regexData)
console.log(year, month, day)