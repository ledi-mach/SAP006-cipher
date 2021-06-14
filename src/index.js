import cipher from './cipher.js';


let buttonCoding = document.getElementById("coding");
buttonCoding.addEventListener("click", function () {
    let txt = document.getElementById("field").value;
    let offset = Number(document.getElementById("chave").value);
    document.getElementById("field").value = cipher.encode(offset, txt);
});

let buttonEncoding = document.getElementById("encoding");
buttonEncoding.addEventListener("click", function () {
    let txt = document.getElementById("field").value;
    let offset = Number(document.getElementById("chave").value);
    document.getElementById("field").value = cipher.decode(offset, txt);

});

let buttonCopy = document.getElementById("copy");
buttonCopy.addEventListener("click", function () {
    document.getElementById("field").select();
    document.execCommand('copy');
})

