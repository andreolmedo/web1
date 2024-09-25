// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

const mensagens = document.getElementsByClassName('mensagem2');

const botaoalterar = document.createElement('buton');
botaoalterar.textContent = ('modificar frases');
document.querySelector('.container').appendChild(botaoalterar);

botaoalterar.addEventListener('click', function(){;
    for(let i=0; i < mensagens.length; i++);
        mensagens[i].textContent = 'frase alterada ${i}'
    }