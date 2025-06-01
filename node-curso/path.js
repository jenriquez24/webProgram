const path = require('path')

//console.log(path.join('/public', 'dist','/styles','main.css'))

const filePath = path.join('/public', 'dist','/styles','main.css')

console.log(filePath) //ruta completa
console.log(path.basename(filePath)) // metodo basename nos devuelve solo el archivo de la ruta
console.log(path.dirname(filePath)) // directorio sin el archivo
console.log(path.parse(filePath)) // ruta completa pero ordenada
console.log(path.resolve('dist'))


