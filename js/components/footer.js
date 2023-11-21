
function createSubscribeParagraph() {
  const paragraph = document.createElement('p');
  paragraph.classList.add('pt-2');

  const strong = document.createElement('strong');
  strong.textContent = 'Inscreva-se para receber nossas promoções';

  paragraph.appendChild(strong);

  return paragraph;
}

function createInfoSection() {
  const infoSection = document.createElement('section');
  infoSection.classList.add('mb-4');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Aqui fica algumas informações sobre a loja / site.';

  infoSection.appendChild(paragraph);

  return infoSection;
}

function createPaymentSection() {
  const paymentSection = document.createElement('section');

  const row = document.createElement('div');
  row.classList.add('row');

  const col1 = createLogoColumn();
  const col2 = createColumnWithHeading('Conheça-nos', createContactList());
  const col3 = createColumnWithHeading('Pagamento', createPaymentList());

  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);

  paymentSection.appendChild(row);

  return paymentSection;
}

function createLogoColumn() {
  const col = document.createElement('div');
  col.classList.add('col-lg-4', 'col-md-6', 'mb-4', 'mb-md-0');

  const img = document.createElement('img');
  img.src = 'img/icon2.png'; // Corrigido o caminho da imagem
  img.alt = 'Logo';
  img.loading = 'lazy';

  col.appendChild(img);

  return col;
}

function createColumnWithHeading(heading, list) {
  const col = document.createElement('div');
  col.classList.add('col-lg-4', 'col-md-6', 'mb-4', 'mb-md-0');

  const h5 = document.createElement('h5');
  h5.textContent = heading;

  col.appendChild(h5);
  col.appendChild(list);

  return col;
}

function createContactList() {
  const ul = document.createElement('ul');
  ul.classList.add('list-unstyled', 'mb-0');

  const listItems = [
    createListItem('mangayabu@atendimento.com'),
    createListItem('Pato Branco - PR'),
    createListItem('10.203.040/0001-50'),
    createListItem('Mais informações', true),
  ];

  listItems.forEach(item => ul.appendChild(item));

  return ul;
}

function createPaymentList() {
  const ul = document.createElement('ul');
  ul.classList.add('list-unstyled', 'mb-0');

  const listItems = [
    createListItem('Compre com pontos'),
    createListItem('Cartão de crédito'),
    createListItem('Boleto'),
    createListItem('Bitcoin'),
  ];

  listItems.forEach(item => ul.appendChild(item));

  return ul;
}

function createListItem(text, link = false) {
  const li = document.createElement('li');

  const a = document.createElement('a');
  a.classList.add('text-white');
  a.href = link ? '#!' : null;
  a.textContent = text;

  li.appendChild(a);

  return li;
}

export async function createFooterComponent() {
  const footer = document.createElement('footer');

  const container = document.createElement('div');
  container.classList.add('container', 'p-4');

  container.appendChild(createInfoSection());
  container.appendChild(createPaymentSection());

  footer.appendChild(container);

  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('text-center', 'p-3');
  copyrightDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

  const copyrightText = document.createTextNode('© 2023 Copyright: ');
  const link = document.createElement('a');
  link.classList.add('text-white');
  link.href = '#';
  link.textContent = 'Luan&Vitor';

  copyrightDiv.appendChild(copyrightText);
  copyrightDiv.appendChild(link);

  footer.appendChild(copyrightDiv);

  return footer.innerHTML;
}