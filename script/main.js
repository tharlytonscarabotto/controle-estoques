const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    criaProduto(evento.target.elements['produto'].value, evento.target.elements['quantidade'].value)
})

function criaProduto(produto, quantidade){
    console.log(produto)
    console.log(quantidade)

    // <li class="item"><strong>3</strong>Azeitona</li>
    const novoProduto = document.createElement('li')
    novoProduto.classList.add('item')

    const quantidadeProduto = document.createElement('strong')
    quantidadeProduto.innerHTML = quantidade

    novoProduto.appendChild(quantidadeProduto)
    novoProduto.innerHTML += produto

    document.getElementById('lista').appendChild(novoProduto)
}