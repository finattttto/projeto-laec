import { createFooterComponent } from "./components/footer.js";
import { createHeaderComponent } from "./components/header.js";
// import { Produto } from "./carrinho/Produto.js";

const container = document.getElementById('produtos');

window.onload = async function () {
    document.getElementById('produtoHeader').innerHTML = await createHeaderComponent();
    document.getElementById('produtoFooter').innerHTML = await createFooterComponent();

}
