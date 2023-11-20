const btAddCarrinho = document.getElementById('btAddCarrinho');

btAddCarrinho.addEventListener('click', function(e){
e.preventDefault();//cancela a ação padrão do submit
const nome = document.getElementById('nome').value;
const preco = document.getElementById('preco').value;
const quant = 1;

const produto = {
nome: nome,
preco: preco,
quantidade: quantidade
};

salvarLocalStorage(produto);
alert("Produto adicionado ao carrinho!");
})

const arrayCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarLocalStorage(produto){ //produto é o objeto
arrayCarrinho.push(produto); //insere o produto no array
//salvar no storage
localStorage.setItem('listaProdutos', JSON.stringify(arrayCarrinho));
}