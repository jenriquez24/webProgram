let  elementoSegundos = parseInt(document.getElementById("tiempoelegido").value); 

function comenzarTiempo(){
    setTimeout(tiempocumplido,elementoSegundos);
}

function tiempocumplido(){
    alert(`Se terminó el tiempo de ${elementoSegundos} segundos`);
}

