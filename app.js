//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let nome = document.querySelector('input');
    if (nome.value == ''){
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome.value);
    }
    nome.value = '';
    atualizar();
}

function atualizar(){
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos == ''){
        console.log('Adicione um nome');
    } else{
        let numero = Math.floor(Math.random() * amigos.length);
        console.log(amigos[numero]);
        let resultado = document.getElementById('resultado');
        lista.innerHTML = '';
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[numero]}`;
    }    
}
