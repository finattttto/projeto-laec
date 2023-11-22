export async function createHeaderComponent() {
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg navbar-light bg-white";

  const container = await criarContainer();
  const toggleButton = await criarBotaoToggle();
  const collapseDiv = await criarDivCollapse();
  const brandLink = await criarLinkMarca();
  const navList = await criarListaNav();
  const formContainer = await criarContainerFormulario();
  const rightContainer = await criarContainerDireita();

  container.appendChild(toggleButton);
  container.appendChild(collapseDiv);
  collapseDiv.appendChild(brandLink);
  collapseDiv.appendChild(navList);
  container.appendChild(formContainer);
  container.appendChild(rightContainer);
  nav.appendChild(container);

  return nav.outerHTML;
}

async function criarContainer() {
  const container = document.createElement("div");
  container.className = "container-fluid";
  return container;
}

async function criarBotaoToggle() {
  const toggleButton = document.createElement("button");
  toggleButton.className = "navbar-toggler";
  toggleButton.type = "button";
  toggleButton.setAttribute("data-mdb-toggle", "collapse");
  toggleButton.setAttribute("data-mdb-target", "#navbarSupportedContent");
  toggleButton.setAttribute("aria-controls", "navbarSupportedContent");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Toggle navigation");
  toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
  return toggleButton;
}

async function criarDivCollapse() {
  const collapseDiv = document.createElement("div");
  collapseDiv.className = "collapse navbar-collapse";
  collapseDiv.id = "navbarSupportedContent";
  return collapseDiv;
}

async function criarLinkMarca() {
  const brandLink = document.createElement("a");
  brandLink.className = "navbar-brand mt-2 mt-lg-0";
  brandLink.href = "index.html";
  
  const brandImg = document.createElement("img");
  brandImg.src = "img/icon2.png";
  brandImg.height = "40";
  brandImg.alt = "Logo";
  brandImg.loading = "lazy";
  
  brandLink.appendChild(brandImg);
  return brandLink;
}

async function criarListaNav() {
  const navList = document.createElement("ul");
  navList.className = "navbar-nav me-auto mb-2 mb-lg-1";

  ["Livros", "Mangás", "Promoções"].forEach(itemText => {
    const listItem = document.createElement("li");
    listItem.className = "nav-item";
    const itemLink = document.createElement("a");
    itemLink.className = "nav-link";
    itemLink.href = "#";
    itemLink.textContent = itemText;
    listItem.appendChild(itemLink);
    navList.appendChild(listItem);
  });

  return navList;
}

async function criarContainerFormulario() {
  const formContainer = document.createElement("div");
  formContainer.className = "container-fluid col-6 col-sm-6 col-md-5 col-lg-3";
  
  const searchForm = document.createElement("form");
  searchForm.className = "d-flex input-group";
  
  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.className = "form-control rounded";
  searchInput.placeholder = "Busque seu mangá aqui";
  searchInput.setAttribute("aria-label", "Search");
  searchInput.setAttribute("aria-describedby", "search-addon");
  
  const searchIcon = document.createElement("span");
  searchIcon.className = "input-group-text border-0";
  searchIcon.id = "search-addon";
  searchIcon.innerHTML = '<i class="fas fa-search"></i>';
  
  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchIcon);
  formContainer.appendChild(searchForm);
  
  return formContainer;
}

async function criarContainerDireita() {
  const rightContainer = document.createElement("div");
  rightContainer.className = "d-flex align-items-center";
  
  const cartIconLink = document.createElement("a");
  cartIconLink.className = "link-secondary me-3";
  cartIconLink.href = "carrinho.html";
  cartIconLink.innerHTML = '<i class="fas fa-shopping-cart"></i>';
  
  const dropdown = await criarBotaoLogin();
  
  rightContainer.appendChild(cartIconLink);
  rightContainer.appendChild(dropdown);
  
  return rightContainer;
}

async function criarBotaoLogin() {
  const botao = document.createElement("div");

  const botaoLogin = document.createElement("button");
  botaoLogin.className = "btn btn-primary d-flex align-items-center hidden-arrow botaologin";
  botaoLogin.type = "button";

  const logado = localStorage.getItem("logado") || false;

  // não funciona adicionar o event aqui por algum motivo
  if (logado === "true") {
    botaoLogin.textContent = "Sair";
    // botaoLogin.addEventListener("click", function(e) {
    //   e.preventDefault();
    //   console.log('Sair');
    //   localStorage.setItem("logado", "false");
    //   window.location.href = "clientelogin.html";
    // });
  } else {
    botaoLogin.textContent = "Entrar";
    // botaoLogin.addEventListener("click", function(e) {
    //   e.preventDefault();

    //   window.location.href = "index.html";
    //   console.log('Entrando');
    // });
  }

  botao.appendChild(botaoLogin);
  
  return botao;
}