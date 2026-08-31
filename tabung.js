const prompt = require("prompt-sync")({ sigint: true });
console.log('=======================')
console.log('---kalkulator tabung---')
console.log('=======================')
let jarijari = Number(prompt('jarijari : ')) 
const phi = 3.14
let luas_alas = pi * jarijari**2
console.log(`luas_alas  : ${luas_alas}`)
console.log('======================')
console.log('-----ini hasil nya----')
console.log('======================')