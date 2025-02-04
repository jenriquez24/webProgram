let f = 1;

while (f < 10) {
    document.write('vuelta nro. ', f);
    document.write('<br>');
    f++;
}

document.write('FIN DEL BUCLE');

document.write('<br>');
document.write('<br>');

let i = 10;

while (i >=0) {
    document.write('vuelta nro. ', i);
    document.write('<br>');
    i--;
}
document.write('<br>');
document.write('FIN DEL BUCLE');


let x = 1;
let suma = 0;
let valor;

while (x <= 5) {
    valor = parseInt(prompt('Ingrese valor'));
    suma = suma + valor;
    x++;
}
96

document.write('<br>');
document.write('La suma es: ', suma, '<br>');
