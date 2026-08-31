const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log('-----kalkulator kubus-----')
console.log('==========================')

let sisi = Number(prompt('sisi : '))
let volume = sisi**3
let luas = 6 * sisi**2
let keliling = 12 * sisi

console.log(`volume :  ${volume}
    luas  : ${luas}
    keliling  : ${keliling}`)
    console.log('=================')
    console.log('~bini hasil nya~~')
    console.log('=================')