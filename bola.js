const prompt = require("prompt-sync")({ sigint: true });
console.log('=======================')
console.log('----kalkulator bola----')
console.log('=======================')

let jarijari = Number(prompt('jarijari  :'))
const phi = 3.14
let volume = 2/3 * phi * jarijari**3

console.log(`volume   : ${volume}`)
    console.log('================')
    console.log('-ini hasil nya--')
    console.log('================')