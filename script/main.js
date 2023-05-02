const formulario = document.querySelector('#formulario')

const produto = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    criaProduto()
})

function criaProduto() {
    console.log(produto.value)
    console.log(quantidade.value)
}