

const arreglo = [1,2,3,[1,2,3,[1,2,3]]]

console.log(arreglo.flat())

const arreglo = [1,2,3,[1,2,3,[1,2,3]]]

console.log(arreglo.flatMap(value => [value,value*2]))