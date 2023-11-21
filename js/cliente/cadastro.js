const btSalvar = document.getElementById('btSave');
const arrayClientes = JSON.parse(localStorage.getItem('clientes')) || [];

btSalvar.addEventListener('click', function (e) {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (emailJaCadastrado(email)) {
        alert("Esse e-mail ja foi cadastrado, tente fazer login!");
    }
    else {
        const cliente = new Cliente();
        cliente.nome = nome;
        cliente.email = email;
        cliente.senha = senha;
        salvarLocalStorage(cliente);
        alert("Cadastro realizado com sucesso!");
    }

})

function salvarLocalStorage(cliente) {
    arrayClientes.push(cliente);
    console.log(cliente);
    localStorage.setItem('clientes', JSON.stringify(arrayClientes));
}

function emailJaCadastrado(email) {
    return arrayClientes.find((prod) => prod.email === email);
}

export class Cliente {
    nome;
    email;
    senha;
}