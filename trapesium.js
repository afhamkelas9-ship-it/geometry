const prompt = require("prompt-sync")({ sigint: true });
console.log('======================')
console.log('-kalkulator trapesium-')
console.log('======================')

let a = Number(prompt('a : '))
let b = Number(prompt('b : '))
let c = Number(prompt('c : '))
let d = Number(prompt('d : '))
let t = Number(prompt('t : '))

luas = 1/2 * (a + b) * t
keliling = a + b + c + d

console.log(`luas  : ${luas}
    keliling  : ${keliling}`)
    console.log('===============')
    console.log('-ini hasil nya-')
    console.log('===============')