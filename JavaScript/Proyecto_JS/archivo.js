//operadores de asignacion incremento, decremento
let a = 1;

document.write('valor de a: ', a);
document.write('<br>');
a++; // 
document.write('Nuevo valor de a ', a);
document.write('<br>');
a+=1;
document.write('Nuevo valor de a ', a);
a--;
document.write('<br>');
document.write('Nuevo valor de a ', a);
a-=3;
document.write('<br>');
document.write('Nuevo valor de a ', a);


let valor1, valor2;
valor1 = 20;
valor2 = 10;

document.write('<br>');
document.write('<br>');
document.write(valor1 > valor2);
document.write('<br>');
document.write(valor1 < valor2);
document.write('<br>');
document.write(valor1 == valor2);
document.write('<br>');
document.write(valor1 != valor2);
document.write('<br>');
document.write('<br>');

let palabra = 'JavaScript';
document.write('La palabra es ', palabra);
document.write('<br>');

// ver tamaño de un texto
document.write('Cantidad de letras: ', palabra.length);
document.write('<br>');

// ver cantidad caracterees especificos
document.write('primeras 4 letras: ', palabra.slice(0,4));
document.write('<br>');

document.write('Primeras 4 letras: ', palabra.substring(0,4));
document.write('<br>');
document.write('<br>');

// cambiar valores de un texto

let saludo = 'Hola a todos';
saludo = saludo.replace('Hola','adios');
document.write(saludo);
document.write('<br>');

//poner en mayusculas
document.write('en mayusculas: ', palabra.toUpperCase());
document.write('<br>');

// poner en misnusculas
document.write('en minusculas: ' , palabra.toLocaleLowerCase());

// unir texto

let palabra2 = 'Curso de ';
document.write('unir palabras: ', palabra2.concat(palabra));
document.write('<br>');

//acortar espacios
let palabra3 = '    Hola        ';
document.write(palabra3);
document.write('<br>');
document.write(palabra3.trimStart());
document.write('<br>');
document.write(palabra3.trimEnd());
document.write('<br>');

// acortar camtidad de caracteres

document.write(palabra.split('Java'));




