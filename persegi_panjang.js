const prompt = require("prompt-sync")({ sigint: true });
console.log('==========================')
console.log('kalkulator persegi panjang')
console.log('==========================')
let l = Number(prompt('luas :')) 
let p = Number(prompt('panjang :'))
let luas = p * l 
let keliling = p + l + p + l
//console.log('luas : ' + luas + 'cm2')
//console.log('keliling : '+ keliling + 'cm')
console.log(`
luas   : ${luas} cm
keliling : ${keliling}cm`)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('--------INI HASIL NYA-----')
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')