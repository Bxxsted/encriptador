let botonEncriptar = document.querySelector('.encriptar');
let botonDesencriptar = document.querySelector('.desencriptar');
let muneco = document.querySelector('.muneco');
let contenedor = document.querySelector('.parrafo');
let resultado = document.querySelector('.textoResultado');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    let cajaTexto = document.querySelector('.cajatexto');
    return cajaTexto.value
}

function ocultarAdelante(){
    muneco.classList.add('ocultar');
    contenedor.classList.add('ocultar');
}

function desencriptarTexto(mensaje) {
    let textoFinal = mensaje;
    let regexEncriptadas = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    let vocalesDesencriptadas = ["a", "e", "i", "o", "u"];

    regexEncriptadas.forEach((regex, index) => {
        textoFinal = textoFinal.replace(regex, vocalesDesencriptadas[index]);
    });

    return textoFinal;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = '';

    for (let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }  
    }
    return textoFinal;
    }

    const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener("click", copiar = () => {
  let contenido = document.querySelector(".textoResultado").textContent;
  navigator.clipboard.writeText(contenido);
});
