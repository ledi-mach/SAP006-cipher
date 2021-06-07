import cipher from './cipher.js';

function valoresButton1 () {
    let txt= document.getElementById("field").value;
    let offset = Number(document.getElementById("chave").value);
    document.getElementById("field").value = cipher.encode(offset, txt);
}

function valoresButton2() {
    let txt = document.getElementById("field").value;
    let offset = Number(document.getElementById("chave").value);
    document.getElementById("field").value = cipher.decode(offset, txt);
}

let buttonCoding1 = document.getElementById("coding");
buttonCoding1.addEventListener("click", valoresButton1);
let buttonCoding2 = document.getElementById("encoding");
buttonCoding2.addEventListener("click", valoresButton2);