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

function carregarProdutosStorage() {
    const arrayProdutos = JSON.parse(localStorage.getItem('carrinho'));
    arrayProdutos.forEach(prod => {
        addProdutoTabela(prod);
    });
}

window.onload = function () {
    console.log('teste carrinho');
    carregarProdutosStorage();
}

