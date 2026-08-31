const prompt = require("prompt-sync")({ sigint: true });
console.log('========================')
console.log('kalkulator jajar genjang')
console.log('========================')

let alas = Number(prompt('alas : '))
let sisi_samping = Number(prompt('sisi_samping : '))
let tinggi = Number(prompt('tinggi : '))

luas = alas * tinggi 
keliling = 2 * (alas + sisi_samping)

console.log(`luas  : ${luas }
    keliling : ${keliling }`)
    console.log('=====================')
    console.log('----ini hasil nya----')
    console.log('=====================')