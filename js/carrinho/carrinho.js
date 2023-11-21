import { createFooterComponent } from "../components/footer.js";
import { createHeaderComponent } from "../components/header.js";


window.onload = async function () {
    document.getElementById('appHeader2').innerHTML = await createHeaderComponent();
    document.getElementById('appFooter2').innerHTML = await createFooterComponent();
    // console.log('teste carrinho');
     await carregarProdutosStorage();
}

function novoProdutoTr(produto) {
    const novaTr = document.createElement('tr');
    novaTr.innerHTML =
        `${produto.nome}${produto.preco}${(produto.preco * produto.quant).toFixed(2)}`

    console.log(novaTr);
    return novaTr;
}


function addProdutoTabela(produto) {
    const tableBody = document.querySelector('#tbProducts tbody');
    // const tr = novoProdutoTr(produto);
    tableBody.appendChild(novoProdutoTr(produto));
}

async function carregarProdutosStorage() {
    const arrayProdutos = JSON.parse(localStorage.getItem('carrinho'));
    arrayProdutos.forEach(prod => {
        addProdutoTabela(prod);
    });
}


