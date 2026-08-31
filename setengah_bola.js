const prompt = require("prompt-sync")({ sigint: true });

console.log ('============================')
console.log ('~~kalkulator setengah bola~~')
console.log ('============================')

let r = Number(prompt('r : '))
const phi = 3.14 
volume = 2/3 * phi * r**3
luas_selimut = 2 * phi * r**2
luas_permukaan = 3 * phi * r**2

console.log(`volume :  ${volume}
luas_selimut :  ${luas_selimut}
luas_permukaan :  ${luas_permukaan}`)

console.log ('===============')
console.log ('~ini hasilnya~~')
console.log ('===============')