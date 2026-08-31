const prompt = require("prompt-sync")({ sigint: true });
console.log ('=============================')
console.log ('~~kalkulator limas-segitiga~~')
console.log ('=============================')

let luas_alas = Number(prompt('luas_alas : '))
let tinggi = Number(prompt('tinggi : '))
let luas_sisi_1 = Number(prompt('luas_sisi_1 : '))
let luas_sisi_2 = Number(prompt('luas_sisi_2 : '))
let luas_sisi_3 = Number(prompt('luas_sisi_3 : '))
let alas = Number(prompt('alas : '))
let tinggi_segitiga = Number(prompt('tinggi_segitiga : '))

 luas_alas_segitiga = 1/2 * alas * tinggi_segitiga
 volume_limas = 1/3 * luas_alas * tinggi 
 luas_permukaan_limas = luas_alas + luas_sisi_1 + luas_sisi_2 + luas_sisi_3

console.log(`luas_alas_segitiga :  ${luas_alas_segitiga}
volume_limas :  ${volume_limas}
luas_permukaan_limas :  ${luas_permukaan_limas}`)

console.log ('==================')
console.log ('~~~ini hasilnya~~~')
console.log ('==================')