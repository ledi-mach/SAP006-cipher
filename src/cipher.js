const cipher = {
  encode (cryptoffset, txt) {
      let result = "";
      for(let i = 0; i < txt.length; i++) {
          let codeLetter = txt.charCodeAt(i); //para encontrar o código ASC de cada letra;
          if(codeLetter >= 65 && codeLetter <= 90) {
              let newCode = ((codeLetter - 65 + cryptoffset)%26) + 65; //para pegar o código ASC já deslocado;
              result += String.fromCharCode(newCode);
          } else {
              result += String.fromCharCode(codeLetter);
          }
      }  return result;
  },
 // decode 
  decode(cryptoffset, txt) {
      let result = "";
      for (let i = 0; i < txt.length ; i++) {
          let codeLetter = txt.charCodeAt(i);
          if (codeLetter >= 65 && codeLetter <= 90) {
              let newCode = ((codeLetter - 65 - cryptoffset)%26) +65;
              result += String.fromCharCode(newCode);
          } else {
              result += String.fromCharCode(codeLetter);
          }
      } return result;
 }

}

export default cipher;
