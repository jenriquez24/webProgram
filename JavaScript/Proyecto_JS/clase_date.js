const fechactual = new Date();

document.write(fechactual);
document.write('<br>');

let fecha = new Date();

document.write('hoy es: ', fecha.getDate());
document.write('<br>');
document.write('<br>');
document.write('el mes actual es: ', fecha.getMonth()+1);
document.write('<br>');
document.write('<br>');
document.write('el año actual es: ', fecha.getFullYear());
document.write('<br>');
document.write('<br>');
document.write('La hora es: ', fecha.getHours(),fecha.getMinutes(), fecha.getSeconds());



