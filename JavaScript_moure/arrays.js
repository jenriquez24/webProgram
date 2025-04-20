let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

myArray = [1,2,3,4];
myArray2 = new Array(1,2,3);

console.log(myArray);
console.log(myArray2)

myArray = ["Brais","Moure","mouredev",37,true];
myArray2 = new Array("Brais","Moure","mouredev",37, true);

console.log(myArray);
console.log(myArray2);

myArray2= new Array(3);
myArray2[2] = "Brais";
myArray2[0] = "Moure";
myArray2[1] = "mouredev";

console.log(myArray2);

myArray[1] = "mouredev";


console.log(myArray);

// metodos comunes

myArray = [];
myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")

console.log(myArray);

//myArray.pop()
//myArray.pop()
//console.log(myArray)

//length

console.log(myArray.length);

// clear

//myArray = [];

//slice

let myNewArray = myArray.slice(1,2)

console.log(myArray);
console.log(myNewArray);

