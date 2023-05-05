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

        itens[existe.id] = itemAtual
    } else{
        itemAtual.id = itens.length

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

    lista.appendChild(novoItem);
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}