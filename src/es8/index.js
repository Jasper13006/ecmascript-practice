const data = {
    frontend: 'Josesito',
    backend : 'Ariel',
    desing : 'Maca'
}

const entries = Object.entries(data)
console.log(entries)

const data = {
    frontend: 'Josesito',
    backend : 'Ariel',
    desing: 'Maca'
}

const values = Object.values(data);
console.log(values)

const palabra = 'Helo'
console.log(palabra.padStart(7,'Hi'))

const helloWoels = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Hello world'),3000)
        : reject(new Error('test error'))
    })
}

const helloAsync = async () => {
    return await helloWoels();
}

