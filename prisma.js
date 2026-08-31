const prompt = require("prompt-sync")({ sigint: true });
console.log('=======================')
console.log('---kalkulator prisma---')
console.log('=======================')
let luas = Number(prompt('luas : '))
let tinggi = Number(prompt('tinggi : '))
let volume = luas * tinggi 
console.log(`volume  : ${volume}`)
console.log('========================')
console.log('-----ini hasil nya------')
console.log('========================')