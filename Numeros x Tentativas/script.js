let resultado = document.getElementById("resultado");
let contadorDeTentativas = document.getElementsByClassName("hp-up");
let iconeCaveira = document.getElementById('death');
let botaoChutar = document.getElementById('button-chutar')
let campoChute = document.getElementById("valor");

let numeroSecreto = NovoNumeroAleatorio();
let tentativas = 3;

campoChute.addEventListener("input", () => {
    let valor = Number(campoChute.value);
    if(valor>10){
        campoChute.value = 10;
    } else if (valor<0){
        campoChute.value = 0;
    }

    if(!campoChute.value){
        botaoChutar.setAttribute("disabled", true)
    } else {
        botaoChutar.removeAttribute("disabled");
    }
})

function Chutar() {
    let chute = parseInt(campoChute.value)

    if (chute == numeroSecreto) {
        resultado.innerText = Mensagens('acertou')
        botaoChutar.setAttribute("disabled", true)        
    } else {
        tentativas--;
        if (tentativas > 0) {
            resultado.innerText = Mensagens('errou', chute)
            AtualizarContadorTentativas(tentativas)
        } else {
            resultado.innerText = Mensagens('acabou')
            AtualizarContadorTentativas(tentativas);
        }
    }
}

function Mensagens(estado, chute = 0) {
    let mensagem;
    if (estado == 'acertou') {
        mensagem = `Parabéns, você acertou!`;
    } else if (estado == 'errou') {
        let comparacao = CompararNumero(chute);
        mensagem = `Errado! O numero secreto é ${comparacao}!`
    } else {
        mensagem = `Você perdeu! O número secreto era: ${numeroSecreto}`
    }
    return mensagem;
}

function CompararNumero(chute) {
    let mensagem;
    chute > numeroSecreto ? mensagem = 'menor' : mensagem = 'maior';
    return mensagem;
}

function AtualizarContadorTentativas(tentativas) {
    contadorDeTentativas[tentativas].style = "visibility: hidden";
    if (tentativas == 0) {
        iconeCaveira.style = "visibility: visible"
        botaoChutar.setAttribute("disabled", true)
        document.body.style = "background-blend-mode: hard-light"
    }
}

function Reiniciar() {
    [...contadorDeTentativas].forEach(element => element.style = "visibility: visible");
    numeroSecreto = NovoNumeroAleatorio();
    tentativas = 3;
    resultado.innerText = '';
    iconeCaveira.style = "visibility: hidden"
    document.body.style = "background-blend-mode: normal"
    botaoChutar.setAttribute("disabled", true)
    campoChute.value = ''
}

function NovoNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}