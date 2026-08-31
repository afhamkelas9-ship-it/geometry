const prompt = require("prompt-sync")({ sigint: true });

console.log ('===================================')
console.log ('~~~kalkulator kerucut terpancung~~~')
console.log ('===================================')

let R = Number(prompt('R : '))
let r = Number(prompt('r : '))
let t = Number(prompt('t : '))
let s = Number(prompt('s : '))
const phi = 3.14 
volume = 1/3 * phi * t * (R**2 + R * r + r**2)
luas_permukaan = phi * (R + r) * s + phi * R**2 + phi * r**2
luas_selimut = phi * (R + r) * s

console.log(`volume :  ${volume}
luas_permukaan :  ${luas_permukaan}
luas_selimut : ${luas_selimut}`)

console.log ('===============')
console.log ('~~ini hasilnya~')
console.log ('===============')