const prompt = require("prompt-sync")({ sigint: true });

console.log ('============================')
console.log ('~kalkulator prisma-segitiga~')
console.log ('============================')

let alas = Number(prompt('alas : '))
let tinggi = Number(prompt('tinggi : '))
let tinggi_prisma = Number(prompt('tinggi : '))
let volume = (1/2 * alas * tinggi ) * tinggi_prisma

console.log (`volume :  ${volume}`)

console.log ('=================')
console.log ('~~~ini hasilnya~~')
console.log ('=================')