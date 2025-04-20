let myName = "Brais";
let greeting = "Hola, " + myName + "!";

console.log(greeting);

//longitud

console.log(greeting.length)

//acceso a caracterees
console.log(greeting[0])
console.log(greeting[1])

//métodos comunes

console.log(greeting.toLocaleUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Brais", "MoureDev"))

// teplate lietarals

let mensaje = `Hola es es mi curso de 
Java script`

console.log(mensaje)