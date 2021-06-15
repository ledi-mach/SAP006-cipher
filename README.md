
# Cripto
Compartilhe e leia mensagens de forma mais segura.
 
## . Apresentação
Por meio de um interface simples, o usuário é orientado quanto aos procedimentos
que pode realizar na página, bem como utilizar os atalhos para saber mais sobre 
a Criptografia de César. Após digitar o texto e indicar o deslocamento, ele pode escolher
entre criptografar, descriptografar e copiar texto. Quanto à criptografia e descriptografia, ela é feita nas letras maiúsculas e minúsculas e para outros caracteres retorna o mesmo valor.

## . Usuários
Pessoas residentes em locais onde há perseguições religiosas e/ou culturais.
## . Objetivo
Possibilitar compartilhamento e leitura de textos de forma mais
segura usando criptografia e descriptografia.
## Solução do produto
Por meio da criptografia, o Cripto oferece uma alternativa mais segura às pessoas que querem compartilhar
e buscar informações sobre seus interesses e têm medo de fazê-los por viverem em locais de repressão religiosa,
política e/ou cultural.

## Considerações gerais
## . Fluxograma
![fluxograma](https://trello-attachments.s3.amazonaws.com/60b6f02a6170db71ca7a01cd/651x491/64d9e5e9bd35a4a911eb855dbcbbc8d6/fluxograma.jpg)
## . Interface
Você pode testar o site clicando <a href="https://ledi-mach.github.io/SAP006-cipher/">aqui</a>
![interface](https://trello-attachments.s3.amazonaws.com/60b53123ac587361d2670496/60c7849fda15ae57c5fe53be/6b6e2c36459c5ebe6fa78659938321ab/Screenshot_from_2021-06-14_13-30-27.png)
## . Tecnologias usadas
HTML, CSS e vanilla JavaScript.
## Considerações técnicas
 let buttonCoding : Pega o texto e deslocamento digitado, chama a função cipher.encode e atribui o resultado
 ao campo de texto.

 let buttonEncoding : Pega o texto e deslocamento digitado, chama a função cipher.decode e atribui o resultado ao 
 campo de texto.

 função cipher.encode : Pega os valores de texto e deslocamento da let buttonCoding e cripta a mensagem pelo código ASCII.

 função cipher.decode : Pega os valores de texto e deslocamento da buttonEncoding e descripta a mensagem pelo código ASCII.
## Autora
[@ledi-mach](https://github.com/ledi-mach)
