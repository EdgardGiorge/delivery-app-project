import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  updateQuantityItem,
  calculateCartTotal,
  getCartInLocalStorage,
} from '../../utils/localStorage';

export default function Product({ setValueTotal, product }) {
  const {
    urlImage: imgLink,
    id: productId,
    price: productPrice,
    name } = product;

  const mergeQuantityCart = () => {
    const cart = getCartInLocalStorage();
    const isItem = cart.find((item) => item.id === productId);
    if (!isItem) {
      return 0;
    }
    return isItem.quantity;
  };

  const [productQuantity, setProductQuantity] = useState(() => mergeQuantityCart());

  const handleQuantityManually = ({ target }) => {
    if (target.value < 0) {
      setProductQuantity(0);
      updateQuantityItem(product, 0);
      setValueTotal(calculateCartTotal());
    } else {
      setProductQuantity(target.value);
      updateQuantityItem(product, target.value);
      setValueTotal(calculateCartTotal());
    }
  };

  const subtractProductQty = (productSub) => {
    if (productQuantity === 0) {
      setProductQuantity(0);
      updateQuantityItem(productSub, 0);
      setValueTotal(calculateCartTottal());
      return;
    }
    setProductQuantity(productQuantity - 1);
    updateQuantityItem(productSub, productQuantity - 1);
    setValueTotal(calculateCartTotal());
  };

  const sumProductQty = (productAdd) => {
    setProductQuantity(productQuantity + 1);
    updateQuantityItem(productAdd, productQuantity + 1);
    setValueTotal(calculateCartTotal());
  };

  return (
    <div data-testid={ `customer_products__element-card-title-${productId}` }>
      <div key={ imgLink }>
        <img
          src={ imgLink }
          alt={ imgLink }
          className="product-image"
          data-testid={ `customer_products__img-card-bg-image-${productId}` }
        />
        <p data-testid={ `customer_products__element-card-price-${productId}` }>
          {productPrice.toString().replace('.', ',')}
        </p>
      </div>
      <p data-testid={ `customer_products__element-card-title-${productId}` }>
        {name}
      </p>
      <div className="product-btn">
        <button
          className="qty-btn"
          onClick={ () => subtractProductQty(product) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${productId}` }
        >
          -
        </button>
        <input
          className="product-input"
          min="0"
          type="number"
          value={ productQuantity }
          data-testid={ `customer_products__input-card-quantity-${productId}` }
          onChange={ handleQuantityManually }
        />
        <button
          className="qty-btn"
          onClick={ () => sumProductQty(product) }
          type="button"
          name={ productId }
          data-testid={ `customer_products__button-card-add-item-${productId}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  imgLink: PropTypes.string,
  productId: PropTypes.string,
  productPrice: PropTypes.number,
}.isRequired;
