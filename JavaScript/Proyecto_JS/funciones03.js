let resultado
function suma(a,b) {
    resultado =  a + b;
    return resultado;
}

document.write(suma(51,54));
document.write('<br>');

function saludar() {
    return 'Hola a todos';
}

var mensaje = saludar();
document.write(mensaje);

// ======================================

function Vercolor(valor) {
    valor = parseInt(prompt('Ingrese valor 1 /  3'));

switch(valor){
    case 1:
            return 'ROJO';
    case 2: 
            return 'VERDE'
    case 3: 
            return 'AMARILLO';
            default:
                return 'VALOR INCORRECTO';
    }
}
alert(Vercolor());
