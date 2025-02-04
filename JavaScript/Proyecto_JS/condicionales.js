let nombre, edad;
nombre = prompt('Ingrese su noombre');
edad = prompt('Ingrese su edad');
edad = parseInt(edad);

if(edad >=18){
    document.write('BIENVENIDO!! ', nombre.toUpperCase());
}
else{
    if(edad < 18){
        document.write(nombre.toUpperCase(), ' ERES MENOR DE EDAD');
    }
    else{
        document.write('NO HAS INGRESADO DATOS');
    }
}


