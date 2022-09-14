const CART = 'carrinho';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export const getCartInLocalStorage = () => {
  const cart = localStorage.getItem(CART);
  if (!cart) {
    const newCart = [];
    localStorage.setItem(CART, JSON.stringify(newCart));
    return newCart;
  }
  return JSON.parse(cart);
};

const findItem = (arrayCart, id) => {
  if (!arrayCart.length) {
    return false;
  }
  const item = arrayCart.find(({ id: idStorage }) => idStorage === id);
  if (!item) {
    return false;
  }
  return item;
};

export const removeProduct = (idProduct) => {
  const products = getCartInLocalStorage();
  const newproducts = products.filter(({ id }) => id !== idProduct);
  localStorage.setItem(CART, JSON.stringify(newproducts));
  return newproducts;
};

export const updateQuantityItem = (product, quantity) => {
  const { id, value } = product;
  const cart = getCartInLocalStorage();
  const oldItem = findItem(cart, id);

  if (!oldItem) {
    cart.push({ ...product, quantity });
    localStorage.setItem(CART, JSON.stringify([...cart]));
    return;
  }

  if (quantity === 0) {
    return removeProduct(product.id);
  }

  const itemUpdated = { ...oldItem, quantity, value };
  const cartUpdated = cart.map((item) => {
    if (item.id === id) {
      return itemUpdated;
    }
    return item;
  });
  localStorage.setItem(CART, JSON.stringify(cartUpdated));
};

export const calculateCartTotal = () => {
  const cart = getCartInLocalStorage();
  const total = cart.reduce((acc, cur) => {
    const valueItem = (cur.quantity * cur.price);
    const conta = valueItem + acc;
    return conta;
  }, 0);
  localStorage.setItem('total', total);
  return total;
};

export const getValueTotal = () => {
  const total = localStorage.getItem('total');
  if (!total) {
    return 0;
  }
  return JSON.parse(total);
};

export const cleanCart = () => {
  localStorage.setItem(CART, JSON.stringify([]));
  localStorage.setItem('total', JSON.stringify(0));
};
