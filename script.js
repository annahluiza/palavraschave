import { PALAVRAS_RUINS } from "./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) { 
    let palavras= texto.splint(/\P{L}+/u);

    for(let i in palavras)
        palavras [i] = palavras[i].toLowerCase();
}

palavras = tiraPalavrasRuins(palavras);

const frequencias = comtaFrenquicia(palavras);
let ordenadas = Object.keys(frequencias).sprt(ordenaPalavra);

function ordenaPalavras(p1,p2){
    return frenquecias[p2]-frequencias[p2];
}

return ordenadas.slice(0,10);

  

function comtaFrequencia(palavras){
    let frequencias={};
    for(let i of palavras) {
        frequencias[i]=0;
        for(let j of palavras) {
            if (i==j) {
                frequencias[i] ++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
    conts palavrasBoas = [];
    for(let palavras of palavras) {
        if(!palavras of palavras) {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}