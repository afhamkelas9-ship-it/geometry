const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log('-kalkulator layang-layang-')
console.log('==========================')
let diagonal_1 = Number(prompt('diagonal_1 : '))
let diagonal_2 = Number(prompt('diagonal_2 : '))
let a = Number(prompt('a : '))
let b = Number(prompt('b : '))
luas = 1/2 * diagonal_1 * diagonal_2
keliling = 2 * (a + b)
console.log(`luas  : ${luas}
    keliling  : ${keliling}`)
    console.log('=================')
    console.log('--ini hasil nya--')
    console.log('=================')