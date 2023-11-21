

// const btAddCarrinho = document.getElementById('btAddCarrinho');

function addFuncaoAddAoCarrinho(btnFuncao) { 
    btnFuncao.addEventListener('click', function (e) {

        e.preventDefault();//cancela a ação padrão do submit
        console.log('btnAdd')
        const nome = document.querySelector('.card-title').value;
        const preco = document.querySelector('.card-text').value;
        const quant = 1;
    
        const produto = new Produto(nome, preco, quant); //criando o objeto por meio de uma classe
        salvarLocalStorage(produto);
    
        alert("Produto adicionado ao carrinho!");
    })

}



const arrayCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarLocalStorage(produto) { //produto é o objeto
    arrayCarrinho.push(produto); //insere o produto no array
    //salvar no storage
    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
}

// window.onload = function () {
//     console.log('teste produtos');
//     salvarLocalStorage(new Produto("produto 1", 1, 1));
//     salvarLocalStorage(new Produto("produto 2", 2, 1));
//     salvarLocalStorage(new Produto("produto 3", 3, 1));
//     salvarLocalStorage(new Produto("produto 4", 4, 1));

//     const arrayProdutos = JSON.parse(localStorage.getItem('carrinho'));
//     arrayProdutos.forEach(prod => {
//         console.log(prod);
//     });


// }

export class Produto {
    nome;
    preco;
    quant;
}