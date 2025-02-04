let numeros = [];
numeros = [15,80,650,30,-10];

document.write('Elementos: ', numeros);
document.write('<br>');

document.write('primer elemento: ', numeros[0]);
document.write('<br>');
numeros[0] = 14;
document.write('Elementos: ', numeros);
document.write('<br>');

let frutas = ['manzanas', 'peras', 'naranjas','mangos'];
document.write('<br>');
document.write('Frutas', frutas);

// metodos de los arrayas


// ver cantidad de elementos
document.write('<br>');
document.write('Cantidad: ',numeros.length);
document.write('<br>');
document.write('Cantidad: ',frutas.length);
document.write('<br>');

// saber utlimo elemnto

document.write('Ultimo elemento: ', numeros[numeros.length - 1]);
document.write('<br>');


// arrays en tipo texto

document.write('En string: ', numeros.toString());
document.write('<br>');

// unir tipos de arrays

let letras = ['a','b','c'];
let numeros2 = [1,2,3];

document.write('Alfanumerico: ', letras.concat(numeros2));
document.write('<br>');

//borrar ultimo elemento

numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar elemento al final
numeros.push(-11);
document.write(numeros);
document.write('<br>');

// delete primer elemento

numeros.shift();
document.write(numeros);
document.write('<br>');

// insertar elementos al inicio

numeros.unshift(100);
document.write(numeros);
document.write('<br>');

// eleiminar elementos
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');


// copiar un array

let cantidades = [100,200,500,600,800];
let copia = cantidades.slice(1,4);

document.write('Array copia: ', copia);
document.write('<br>');
document.write('<br>');

// organizar arrays en modo alfabetico
document.write(frutas.sort());
document.write('<br>');






