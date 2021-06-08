const cipher = {
    encode (offset, txt) {
        //if()...aqui escrever a função para bloqueio se o parâmetro for incorreto.
        let result = "";

        if((typeof offset !== null || typeof offset == "number") || (typeof txt == "string")) {
        for(let i = 0; i < txt.length; i++) {
            let codeLetter = txt.charCodeAt(i); //para encontrar o código ASC de cada letra;
            if(codeLetter >= 65 && codeLetter <= 90) {
                let newCode = ((codeLetter - 65 + offset)%26) + 65; //para pegar o código ASC das maiúsculas já deslocado;
                result += String.fromCharCode(newCode);
            } else (codeLetter >= 90 && codeLetter <= 122) {//para pegar o código ASC das minúsculas já deslocado;
                let newCode = ((codeLetter - 97 + offset)% 26) +97;
                result += String.fromCharCode(newCode);
            } 
            }  return result;
        } throw TypeError('Dados inválidos');
    },
   // decode 

    decode(offset, txt) {
        let result = "";

        if((typeof offset !== null || typeof offset == "number") || (typeof txt == "string")) {
        for (let i = 0; i < txt.length ; i++) {
            let codeLetter = txt.charCodeAt(i);
            if (codeLetter >= 65 && codeLetter <= 90) {
                let newCode = ((codeLetter + 65 - offset)%26) +65;
                result += String.fromCharCode(newCode);
            } else if (codeLetter >= 97 && codeLetter <= 122) {//para pegar o código ASC das minúsculas já deslocado;
                let newCode = 122 -((122 - codeLetter + offset)%26);
                result += String.fromCharCode(newCode);
            }
        }return result;
    } else {
        throw TypeError('Dados inválidos');
    }
}
}
export default cipher;
