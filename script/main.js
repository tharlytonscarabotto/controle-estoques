let formulario = document.getElementById('formulario');
let lista = document.getElementById('lista');
let itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let produto = evento.target.elements['produto']
    let quantidade = evento.target.elements['quantidade']

    let existe = itens.find(elemento => elemento.produto === produto.value)

    let itemAtual = {
        "produto": produto.value,
        "quantidade": quantidade.value
    }
    
    if(existe){
        itemAtual.id = existe.id

        atualizaElemento (itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else{
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0;

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem('itens', JSON.stringify(itens))

    produto.value = ""
    quantidade.value = ""
})

function criaElemento (item){
    let novoItem = document.createElement('li');
    novoItem.classList.add('item');

    let quantidadeItem = document.createElement('strong');
    quantidadeItem.innerHTML = item.quantidade;
    quantidadeItem.dataset.id = item.id
    novoItem.appendChild(quantidadeItem);

    novoItem.innerHTML += item.produto;

    novoItem.appendChild(botaoExcluir(item.id))

    lista.appendChild(novoItem);
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoExcluir(id){
    let botaoDeleta = document.createElement("button")
    botaoDeleta.innerText = "X"

    botaoDeleta.addEventListener("click", function(){
        deletaElemento(this.parentNode, id)
    })

    return botaoDeleta
}

function deletaElemento(tag, id){
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id),1)

    localStorage.setItem('itens', JSON.stringify(itens))
}