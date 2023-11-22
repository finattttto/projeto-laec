import { createFooterComponent } from "../components/footer.js";
import { createHeaderComponent } from "../components/header.js";

const btSalvar = document.getElementById('btCadastrar');
const arrayClientes = JSON.parse(localStorage.getItem('clientes')) || [];

const form = document.querySelector('#form-cadastro');
const inputs = document.querySelectorAll('.required');
const spanErrors = document.querySelectorAll('.error-message');

let valido = true;

const messages = {
    emptyfield: "Preencha o campo {field}",
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    invalidEmail: "Informe um endereço de email válido. ",
    invalidCpf: "Informe um CPF válido.",
    invalidCep: "Informe um CEP válido.",
    invalidSenha: "As senhas devem ser iguais."
}

window.onload = async function () {
    document.getElementById('clienteCadastroHeader').innerHTML = await createHeaderComponent();
    document.getElementById('clienteCadastroFooter').innerHTML = await createFooterComponent();

    await popularEstados();
}

const estadosBrasil = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina",
    "São Paulo", "Sergipe", "Tocantins"];

async function popularEstados() {
    const selectEstado = document.getElementById('estado');

    estadosBrasil.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        option.text = estado;
        selectEstado.appendChild(option);
    });
}

// btSalvar.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (valido) {
//         alert("Preencha corretamente todos os campos!");
//     } else {
//         const nome = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const senha = document.getElementById('senha').value;

//         if (emailJaCadastrado(email)) {
//             alert("Esse e-mail ja foi cadastrado, tente fazer login!");
//         }
//         else {
//             let cliente = new Cliente();
//             cliente.nome = nome;
//             cliente.email = email;
//             cliente.senha = senha;
//             salvarLocalStorage(cliente);
//         }
//     }
// })

function salvarLocalStorage(cliente) {
    arrayClientes.push(cliente);
    console.log(cliente);
    localStorage.setItem('clientes', JSON.stringify(arrayClientes));
    localStorage.setItem('logado', true);
    alert("Cadastro realizado com sucesso!");
    window.location.href = 'index.html';
}

function emailJaCadastrado(email) {
    return arrayClientes.find((prod) => prod.email === email);
}

function validateInput(input, spanError) {
    let error = false;
    let message;
    if (input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name)
    } else if (input.name === 'nome' && input.value.length < 2) {
        error = true;
        message = messages.shortName;
    } else if (input.name === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
        error = true;
        message = messages.invalidEmail;
    } else if (input.name === 'senha-conf'){
        let senha = document.getElementById('senha').value;
        if(senha != input.value){
            error = true;
            message = messages.invalidSenha;
        }
    }

    if(valido){
        valido = !error;
    }

    if (error) {//se o formulário contém erros
        spanError.textContent = message;
        spanError.style.display = 'block';
        spanError.classList.add('errofont');
        input.classList.add('erroinput');
    }
    else {
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('erroinput');
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    valido = true;
    inputs.forEach(function (input, index) {
        console.log(index);
        if (index < spanErrors.length) {
            validateInput(input, spanErrors[index])
        }

    })

    if(valido){
        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (emailJaCadastrado(email)) {
            alert("Esse e-mail ja foi cadastrado, tente fazer login!");
        }
        else {
            let cliente = new Cliente();
            cliente.nome = nome;
            cliente.email = email;
            cliente.senha = senha;
            salvarLocalStorage(cliente);
        }
    }

})

inputs.forEach((input) => {
    input.addEventListener('blur', function () {
        const errorMessage = input.nextElementSibling;
        validateInput(input, errorMessage);
    })
})

export class Cliente {
    nome = '';
    cpf = '';
    email = '';
    senha = '';
    telefone = '';
    // genero = '';
    cep = '';
    cidade = '';
    estado = '';
    rua = '';
    bairro = '';
    número = '';
}