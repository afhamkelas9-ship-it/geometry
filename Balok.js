const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log('-kalkulator balok-')
console.log('==================')

let p = Number(prompt('p : '))
let l = Number(prompt('l : '))
let t = Number(prompt('t : '))
let luas = p * l * t
let panjang_rusuk = 2 * (p * l + p * t + l * t)

console.log(`luas  : ${luas}
panjang_rusuk  : ${panjang_rusuk}`)

    console.log('=================')
    console.log('--ini hasil nya--')
    console.log('=================')