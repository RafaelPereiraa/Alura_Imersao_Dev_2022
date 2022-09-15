class Jogador {
    constructor(nome, vitorias = 0, empates = 0, derrotas = 0, pontos = 0) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.empates = empates;
        this.derrotas = derrotas;
        this.pontos = pontos;
    }
}

let jogadores = []

// variável para controle de seleção de adversário
let adversario = false;

function AdicionarJogador() {
    let nome = document.getElementById("nomeJogador").value;
    let jogador = new Jogador(nome)
    
    if (!nome) {
        alert("Digite um nome!")
        return 
    } 
    
    if (JogadorRepetido(nome)) {
        alert("Jogador Repetido!")
    } else {
        jogadores.push(jogador)
        InserirJogador(jogador)
    }

    if (jogadores.length > 1) {
        LiberarBotoes();
    }

}

function InserirJogador(jogador) {
    let tabela = document.getElementById("tabelaJogadores")
    tabela.innerHTML += `
        <tr>
        <td>${jogador.nome}</td>
        <td id="vitorias-${jogador.nome}">0</td>
        <td id="empates-${jogador.nome}">0</td>
        <td id="derrotas-${jogador.nome}">0</td>
        <td id="pontos-${jogador.nome}">0</td>
        <td><button onClick="adicionarVitoria(${jogadores.length - 1})" class="botao-vitoria" disabled>Vitória</button></td>
        <td><button onClick="adicionarEmpate(${jogadores.length - 1})" class="botao-empate" disabled>Empate</button></td>
        <td><button onClick="adicionarDerrota(${jogadores.length - 1})" class="botao-derrota" disabled>Derrota</button></td>
        </tr>
    `
}

function JogadorRepetido(nome) {
    return jogadores.some(element => element.nome == nome)
}

// ----------- Calculo dos Pontos

function CalcularPontos(jogador) {
    return jogador.vitorias * 3 + jogador.empates;
}

function adicionarVitoria(index) {
    jogadores[index].vitorias++;
    document.getElementById(`vitorias-${jogadores[index].nome}`).innerText = jogadores[index].vitorias;
    document.getElementById(`pontos-${jogadores[index].nome}`).innerText = CalcularPontos(jogadores[index]);

    if (adversario) {
        LiberarBotoes();
        adversario = false;
    } else {
        TravarBotoes(index, "vitoria");
        alert("Selecione o Adversário!")
    }

}

function adicionarEmpate(index) {
    jogadores[index].empates++;
    document.getElementById(`empates-${jogadores[index].nome}`).innerText = jogadores[index].empates;
    document.getElementById(`pontos-${jogadores[index].nome}`).innerText = CalcularPontos(jogadores[index]);

    if (adversario) {
        LiberarBotoes();
        adversario = false;
    } else {
        TravarBotoes(index, "empate");
        alert("Selecione o Adversário!")
    }

}

function adicionarDerrota(index) {
    jogadores[index].derrotas++;
    document.getElementById(`derrotas-${jogadores[index].nome}`).innerText = jogadores[index].derrotas;
    document.getElementById(`pontos-${jogadores[index].nome}`).innerText = CalcularPontos(jogadores[index]);

    if (adversario) {
        LiberarBotoes();
        adversario = false;
    } else {
        TravarBotoes(index, "derrota");
        alert("Selecione o Adversário!")
    }
}

// -- Travar botoes para seleção de adversário -- //

function LiberarBotoes() {
    let botoesVitoria = document.getElementsByClassName("botao-vitoria");
    let botoesEmpate = document.getElementsByClassName("botao-empate");
    let botoesDerrota = document.getElementsByClassName("botao-derrota");

    Array.from(botoesVitoria).forEach(element => element.removeAttribute("disabled"));
    Array.from(botoesEmpate).forEach(element => element.removeAttribute("disabled"));
    Array.from(botoesDerrota).forEach(element => element.removeAttribute("disabled"));
}

function TravarBotoes(index, resultado) {
    let botoesVitoria = document.getElementsByClassName("botao-vitoria");
    let botoesEmpate = document.getElementsByClassName("botao-empate");
    let botoesDerrota = document.getElementsByClassName("botao-derrota");

    switch (resultado) {
        case "vitoria":
            botoesDerrota[index].setAttribute("disabled", true)
            Array.from(botoesVitoria).forEach(element => element.setAttribute("disabled", true));
            Array.from(botoesEmpate).forEach(element => element.setAttribute("disabled", true));
            break
        case "empate":
            botoesEmpate[index].setAttribute("disabled", true)
            Array.from(botoesVitoria).forEach(element => element.setAttribute("disabled", true));
            Array.from(botoesDerrota).forEach(element => element.setAttribute("disabled", true));
            break
        case "derrota":
            botoesVitoria[index].setAttribute("disabled", true)
            Array.from(botoesEmpate).forEach(element => element.setAttribute("disabled", true));
            Array.from(botoesDerrota).forEach(element => element.setAttribute("disabled", true));
            break
    }

    adversario = true;
}