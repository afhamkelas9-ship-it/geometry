const prompt = require("prompt-sync")({ sigint: true });

console.log ('======================')
console.log ('~~~kalkulator elips~~~')
console.log ('======================')

let a = Number(prompt('a : '))
let b = Number(prompt('b : '))
const phi = 3.14
luas = phi * a * b 

console.log (`luas :  ${luas}`)

console.log ('===============')
console.log ('~~ini hasilnya~')
console.log ('===============')