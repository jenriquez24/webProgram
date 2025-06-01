const fs = require('fs')
 
// metodo readFileSync del modulo fs para leer un archivo pero en formato de maquina con utf 8 se puede leer
const first = fs.readFileSync('./data/first.txt', 'utf-8')
const seconds = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(seconds.toString())

//metodo writeFileSyncpara crear un archivo
fs.writeFileSync('./data/third.txt', 'Este es un archivo creado desde node')

const third = fs.readFileSync('./data/third.txt')

console.log(third.toString())