const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log('KALKULATOR PERSEGI')
console.log('==================')
let sisi = Number(prompt('sisi : '))
let luas = sisi * sisi
let keliling = 4 * sisi
console.log(`
luas    : ${luas} cm
keliling : ${keliling} cm`)
console.log('====done====')