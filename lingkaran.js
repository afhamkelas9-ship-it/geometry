const prompt = require("prompt-sync")({ sigint: true });
console.log('======================')
console.log('-kalkulator lingkaran-')
console.log('======================')

let jari_jari = Number(prompt('jari_jari : '))
const phi = 3.14
let d = Number(prompt('d : '))
let luas = phi * jari_jari**2
let keliling_1 = 2 * phi * jari_jari
let keliling_2 = phi * d

console.log(`luas  : ${luas}
    keliling_1  : ${keliling_1}
    keliling_2  :${keliling_2}`)
    console.log('===============')
    console.log('-ini hasil nya-')
    console.log('===============')