const prompt = require("prompt-sync")({ sigint: true });
console.log('=======================')
console.log('--kalkulator segitiga--')
console.log('=======================')
let alas = Number(prompt('alas : '))
let tinggi = Number(prompt('tinggi : '))
let luas = 1/2 * alas * tinggi
console.log(`luas   : ${luas}`)
console.log('=======================')
console.log('------ini hasil nya----')
console.log('=======================')