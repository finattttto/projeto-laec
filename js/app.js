import { createFooterComponent } from "./components/footer.js";
import { createHeaderComponent } from "./components/header.js";
// import { Produto } from "./carrinho/Produto.js";

const container = document.getElementById('produtos');

window.onload = async function () {
    document.getElementById('appHeader').innerHTML = await createHeaderComponent();
    document.getElementById('appFooter').innerHTML = await createFooterComponent();

    await carregaCardsProdutos();
    await adicionaEventoBotaoLogin();
}

// não estava funcionando com colocando o evento de click direto no createElement,
// então ele recupera o botão e adiciona o evento aqui...
async function adicionaEventoBotaoLogin(){
    const logado = localStorage.getItem("logado") || false;

    if (logado === "true") {
        document.getElementById('appHeader').querySelector('.botaologin').addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Saindo');
            localStorage.setItem("logado", "false");
            window.location.href = "clienteLogin.html";
        })
    } else {
      document.getElementById('appHeader').querySelector('.botaologin').addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Entrando');
            window.location.href = "clienteLogin.html";
        })
    }
}

async function carregaCardsProdutos() {
    const cardData = await buscaDadosProdutos();

    const cardContainer = document.createElement('div');
    cardContainer.className = 'col-12 col-xl-8 row';

    cardData.forEach(data => {
        const card = criaCard(data);
        cardContainer.appendChild(card);
    });

    const centralizaCards = document.createElement('div');
    centralizaCards.className = 'p-2 centraliza-cards';
    centralizaCards.appendChild(cardContainer);

    container.appendChild(centralizaCards);
}

async function buscaDadosProdutos() {
    try {
        const response = await fetch('data/produtos.json');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

function criaCard(cardData) {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 col-lg-3 p-4';

    //Construindo o card
    card.innerHTML = `
    <a href="paginaProduto.html">
        <div class="card w-100 shadow-5-strong">
            <div class="mx-auto w-70 pt-3">
                <img src="${cardData.imagem}" class="card-img-top img-fluid shadow-5-strong" alt="Capa"/>
            </div>
            <div class="card-body">
                <h6 class="card-title">${cardData.nome}</h6>
                <p class="card-text">${cardData.preco}</p>
                <div class="text-end">
                    <button type="button" class="btn btn-dark btn-rounded carrinho">
                     Carrinho
                    </button>
                </div>
            </div>
        </div>
    </a>
    `;

    // botão de adicionar ao carrinho no botão do card
    card.querySelector('.carrinho').addEventListener('click', function (e) {

        e.preventDefault();

        const nome = document.querySelector('.card-title').textContent;
        const preco = document.querySelector('.card-text').textContent;
        const quant = 1;

        const produto = new Produto(nome, preco, quant); //criando o objeto por meio de uma classe
        salvarLocalStorage(produto);

        console.log("nome: " + produto.nome + "\npreco: " + produto.preco + "\nquant: " + produto.quant);
        alert("Produto adicionado ao carrinho!");
    })

    return card;
}

//Adicionar o item ao localStorage do carrinho
const arrayCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarLocalStorage(produto) { //produto é o objeto
    arrayCarrinho.push(produto); //insere o produto no array
    //salvar no storage
    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
}

export class Produto {
    nome;
    preco;
    quant;
}