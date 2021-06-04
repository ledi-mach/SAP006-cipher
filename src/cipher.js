const cipher = {
  encode: function(key, txt){
    let result = "";
        for (let cont; cont <= txt.length; cont++) {
            let codeLetter = txt.charCodeAt(cont); //para encontrar o código ASC de cada letra; 
            if(codeLetter >= 65 && codeLetter <=90) {//codigo ASC vai de 65 a 90 (para maiúsculas);
                let NewCode = (((codeLetter-65 + key) %26) + 65); //para pegar o código ASC já deslocado;
                result += String.fromCharCode(newCode);
            }         
        }
        return result;
  }
};


export default cipher;
