import cipher from './cipher.js';
let txt = document.getElementById("field").value; //pegar o texto digitado
let txtUpper= txt.toUpperCase(); //mudar o texto para caixa alta.
let key = Number(document.getElementById("chave").value);//aqui pega o valor do deslocamento.

document.getElementById("field").addEventListener.value = cipher();

//Para chamar a função ao clicar:
document.getElementById("field").addEventListener("click", cipher);


/*
}
let key = Number(prompt("Digite a chave (somente números)")); //Pegar o valor da chave.
if(key == 0 || key == "" ) {//aqui pesquisar como impedir a string;
        alert("Favor digitar um número válido!");
 } 
    */