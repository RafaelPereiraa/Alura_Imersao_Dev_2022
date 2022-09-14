function adicionarFilme() {

    let imagemFilme = document.getElementById('imagemFilme');
    let nomeFilme = document.getElementById('nomeFilme');
    let elementoListaFilmes = document.getElementById('listaFilmes')

    // console.log(imagemFilme.parentElement.remove())


    if (FilmeRepetido(nomeFilme.value.split(" ").join("_"))) {
        alert("Filme Repetido")
    } else {
        elementoListaFilmes.innerHTML += criarCampo(imagemFilme.value, nomeFilme.value);
    }
    // campoFilme.value = "";

}

function criarCampo(imagemFilme, nomeFilme) {
    return `<div class="filme" id=${nomeFilme.split(" ").join("_")}><img src=${imagemFilme}><h3>${nomeFilme}</h3><button onClick="RemoverFilme(this)">Remover</button></div>`
}

function RemoverFilme(element) {
    element.parentElement.remove()
}

function FilmeRepetido(nomeFilme){
    let listagem = document.getElementsByClassName("filme");
    return Array.from(listagem).some(element => element.getAttribute('id') == nomeFilme)
}