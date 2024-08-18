let texto = '';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar() {
    var ocultar = document.getElementById('ocultar');
    var mostrarBtt = document.getElementById('mostrar-btt');
    var mostrarTexto = document.getElementById('mostrar-text');
    texto = document.getElementById('area-texto').value
    exRegular = /^[a-z\sñ]+$/;
    if(exRegular.test(texto)) {
        texto = texto.replace(/e/g,"enter");
        texto = texto.replace(/i/g,"imes");
        texto = texto.replace(/a/g,"ai");
        texto = texto.replace(/o/g,"ober");
        texto = texto.replace(/u/g,"ufat");
        ocultar.style.display = "none";
        mostrarBtt.style.display = "flex";
        mostrarTexto.style.display = "flex";
        asignarTextoElemento('salida-texto',texto)
    } else if (texto == '') {
        ocultar.style.display = "block";
        mostrarBtt.style.display = "none";
        asignarTextoElemento('salida-texto','')
    } else {
        texto = 'No se aceptan letras mayusculas, acentos ni caracteres especiales'
        asignarTextoElemento('salida-texto',texto)
        mostrarBtt.style.display = "none";
        ocultar.style.display = "none";
        mostrarTexto.style.display = "flex";
    }
}


function desencriptar() {
    var ocultar = document.getElementById('ocultar');
    var mostrarBtt = document.getElementById('mostrar-btt');
    var mostrarTexto = document.getElementById('mostrar-text');
    texto = document.getElementById('area-texto').value
    exRegular = /^[a-z\sñ]+$/;
    if(exRegular.test(texto)) {
        texto = texto.replace(/enter/g,'e');
        texto = texto.replace(/imes/g,'i');
        texto = texto.replace(/ai/g,'a');
        texto = texto.replace(/ober/g,'o');
        texto = texto.replace(/ufat/g,'u');
        ocultar.style.display = "none";
        mostrarBtt.style.display = "flex";
        mostrarTexto.style.display = "flex";
        asignarTextoElemento('salida-texto',texto)
    } else if (texto == '') {
        ocultar.style.display = "block";
        mostrarBtt.style.display = "none";
        asignarTextoElemento('salida-texto','')
    } else {
        texto = 'No se aceptan letras mayusculas, acentos ni caracteres especiales'
        asignarTextoElemento('salida-texto',texto)
        mostrarBtt.style.display = "none";
        ocultar.style.display = "none";
        mostrarTexto.style.display = "flex";
    }
}

function copiar(){
    navigator.clipboard.writeText(texto);
}
