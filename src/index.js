import cipher from './cipher.js';

function valoresButton1() {
        let txt = document.getElementById("field").value//pegar o texto digitado
        let txtUpperCase = txt.toString().toUpperCase(); //Fiz errado: let txtUpperCase = string.toUpperCase(); 
        let cryptoffset = Number(document.getElementById("chave").value);//aqui pega o valor do deslocamento.
    
        document.getElementById("field").value = cipher.encode(cryptoffset, txtUpperCase);
    }
    
    function valoresButton2() {
        let txt = document.getElementById("field").value//pegar o texto digitado
        let txtUpperCase = txt.toString().toUpperCase(); //tava dando erro pq fiz: let txtUpperCase = string.toUpperCase(); 
        let cryptoffset = Number(document.getElementById("chave").value);//aqui pega o valor do deslocamento.
        document.getElementById("field").value = cipher.decode(cryptoffset, txtUpperCase);
    }
    
    let buttonCoding1 = document.getElementById("coding");
    buttonCoding1.addEventListener("click", valoresButton1);
    let buttonCoding2 = document.getElementById("encoding");
    buttonCoding2.addEventListener("click", valoresButton2);
    
    /*
    let key = Number(prompt("Digite a chave (somente números)")); //Pegar o valor da chave.
    if(key == 0 || key == "" ) {//aqui pesquisar como impedir a string;
            alert("Favor digitar um número válido!");
     } 
        */