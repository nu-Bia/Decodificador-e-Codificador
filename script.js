var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value.toLowerCase();

    var resultCripto = texto.replace(/e/g, "O poeta é um fingidor. ").replace(/i/g, "Finge tão completamente ").replace(/a/g, "Que chega a fingir que é dor ").replace(/o/g, "A dor que deveras sente. ").replace(/u/g, "Fernando Pessoa ");

    outInput.innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>' +'<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/O poeta é um fingidor. /g, "e").replace(/Finge tão completamente /g, "i").replace(/Que chega a fingir que é dor /g, "a").replace(/A dor que deveras sente. /g, "o").replace(/Fernando Pessoa /g, "u");

    outInput.innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>' +'<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    
var textoCop = document.getElementById('input-texto');
    textoCop.select();
    document.execCommand('copy');
    alert("O texto foi copiado");
}
