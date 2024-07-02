let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', 'Você acertou o número Secreto!');
    } else{
        let comparativo = numeroSecreto < chute ? 'menor' : 'maior';
        exibirTextoNaTela('p', `O número secreto é ${comparativo} que ${chute}. Tente novamente.`);
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);  
}