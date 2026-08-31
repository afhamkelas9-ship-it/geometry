const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log('-kalkulator belah ketupat-')
console.log('==========================')

let diagonal_1 = Number(prompt('diagonal_1 : '))
let diagonal_2 = Number(prompt('diagonal_2 : '))
let sisi = Number(prompt('sisi : '))
let luas = 1/2 * diagonal_1 * diagonal_2
let keliling = 4 * sisi

console.log(`luas  : ${luas}
keliling  : ${keliling}`)
    console.log('===================')
    console.log('---ini hasil nya---')
    console.log('===================')