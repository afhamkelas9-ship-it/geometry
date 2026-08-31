const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log('---kalkulator kerucut---')
console.log('========================')

let jarijari = Number(prompt('jarijari : '))
let tinggi = Number(prompt('tinggi : '))
const phi = 3.14
let volume = 1/3 * pi * jarijari**2 * tinggi

console.log(`volume  : ${volume}`)

console.log('=======================')
console.log('------ini hasil nya----')
console.log('=======================')