let control = 0;
let contraseña ='acceso01';

function verificar(){
    let clave = document.getElementById("clave").value;

    if(clave != contraseña || clave == "" ){
        alert('CLAVE INCORRECTA O VACIA INTENTE DE NUEVO');
        control++;
        if(control >= 3){
            alert('Intentos agotados, Acceso bloqueado\
                Contactar a soporte técnico');
        }
    }
    else{
       window.open("http://www.google.com");
    }

}
