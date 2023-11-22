const btLogin = document.getElementById('btLogin');
const arrayClientes = JSON.parse(localStorage.getItem('clientes')) || [];

btLogin.addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    arrayClientes.find((cli) => {
        if(cli.email === email){
            if(cli.senha === senha){
                alert("Login realizado com sucesso!");
                localStorage.setItem("logado", true);
                window.location.href = "index.html";
                return;
            }else{
                alert("Senha incorreta!");
            }
        }
    });

})