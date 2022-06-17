const cartItems = document.querySelector('.cart__items');

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const totalizerFunction = () => {
  const priceObject = document.querySelector('.total-price');
  const liList = document.querySelectorAll('.cart__item');
  let totalAmount = 0;

  liList.forEach((eachLiElement) => {
    const liInnerText = eachLiElement.innerText;
    const splittedText = liInnerText.split('$');
    const number = splittedText[splittedText.length - 1];
    totalAmount += (+number);
  });

  priceObject.innerHTML = `Total da compra: $ ${totalAmount}`;
};

const cartItemClickListener = (eventParam) => {
  (eventParam.target).parentNode.removeChild(eventParam.target);
  saveCartItems(cartItems.innerHTML);
  totalizerFunction();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('item__add')) {
    const fetchedItem = await fetchItem(getSkuFromProductItem(event.target.parentElement));
    const li = createCartItemElement(fetchedItem);
    const olObject = document.querySelector('ol');
    olObject.appendChild(li);
    totalizerFunction();
    saveCartItems(cartItems.innerHTML);
  }
  if (event.target.classList.contains('cart__item')) cartItemClickListener(event);
  if (event.target.classList.contains('empty-cart')) cartItems.innerHTML = ''; totalizerFunction();
  if (event.target.classList.contains('total-price')) totalizerFunction();
});

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const addProductToSection = async (productParam) => {
  const productDivObject = document.querySelector('.items');
  const computerProductArray = (await fetchProducts(productParam)).results;
  const waitingMessageArea = document.querySelector('.loading');
  waitingMessageArea.remove();
  computerProductArray.forEach((eachProduct) => {
    const { id, title, thumbnail } = eachProduct;
    const productElement = createProductItemElement({
      id,
      title,
      thumbnail,
    });

    productDivObject.appendChild(productElement);
  });
};

const recriateCart = () => {
  const savedLocalStorage = getSavedCartItems();
  cartItems.innerHTML = savedLocalStorage;
};

window.onload = () => {
  addProductToSection('computador');
  recriateCart();
};
