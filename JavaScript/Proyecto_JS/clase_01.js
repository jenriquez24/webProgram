class Persona{
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = 'Av. Siemprevivo 742';
    telefono = '25452112';
    email = 'prueba@gmail.com';


trabajar(){
    return 'trabaja en una planta nuclear';
}

estudiar(){
    return 'Escuela primaria de Sprinfield';
    }
}

const homero = new Persona();
const bart = new Persona();
document.write(homero.nombre+' '+ homero.apellido);
document.write('<br>');
document.write(homero.trabajar());
document.write('<br>');
document.write('<br>');
document.write('<br>');

document.write('Bart ', bart.apellido);
document.write('<br>');
document.write('estudia en: ', bart.estudiar());

