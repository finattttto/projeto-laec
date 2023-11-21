import { footerComponent } from "./components/footer.js";
import { headerComponent } from "./components/header.js";

const container = document.getElementById('produtos');

window.onload = async function(){
    document.getElementById('appHeader').innerHTML = headerComponent;
    document.getElementById('appFooter').innerHTML = footerComponent;

    await renderCards();
}

async function renderCards() {
    const cardData = await fetchCardData();

    const cardContainer = document.createElement('div');
    cardContainer.className = 'col-12 col-xl-8 row';

    cardData.forEach(data => {
        const card = createCard(data);
        cardContainer.appendChild(card);
    });

    const centralizaCards = document.createElement('div');
    centralizaCards.className = 'p-2 centraliza-cards';
    centralizaCards.appendChild(cardContainer);

    container.appendChild(centralizaCards);
}

async function fetchCardData() {
    try {
        const response = await fetch('data/produtos.json');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 col-lg-3 p-4';

    card.innerHTML = `
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
    `;

    // Adiciona um evento de clique ao botão "Carrinho" diretamente
    const btnCarrinhoCard = card.querySelector('.carrinho')
    addFuncaoAddAoCarrinho(btnCarrinhoCard);
    
    return card;
}

