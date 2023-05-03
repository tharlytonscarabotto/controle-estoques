let formulario = document.getElementById('formulario');
let lista = document.getElementById('lista');
let itens = []

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let produto = evento.target.elements['produto']
    let quantidade = evento.target.elements['quantidade']
    
    criaElemento(produto.value, quantidade.value)

    produto.value = ""
    quantidade.value = ""
})

function criaElemento (produto, quantidade){
    let novoItem = document.createElement('li');
    novoItem.classList.add('item');

    let quantidadeItem = document.createElement('strong');
    quantidadeItem.innerHTML = quantidade;

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += produto;

    lista.appendChild(novoItem);

    let itemAtual = {
        "produto": produto,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem('itens', JSON.stringify(itens))
}