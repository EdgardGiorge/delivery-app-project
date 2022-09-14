import React from 'react';
import PropTypes from 'prop-types';
import { removeProduct, calculateCartTotal } from '../../utils/localStorage';

function Table({ products, setProducts, setTotal }) {
  const handleRemoveProduct = (id) => {
    const newProducts = removeProduct(id);
    const newTotal = calculateCartTotal();
    setProducts(newProducts);
    setTotal(newTotal);
  };

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Subtotal</th>
        <th>Remover</th>
      </tr>
      { products && products.map((item, index) => (
        <tr key={ item.nome }>
          <td
            data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
          >
            {index + 1}

          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-name-${index}` }
          >
            {item.name}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
          >
            {item.quantity}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
          >
            {Number(item.price).toFixed(2).replace('.', ',')}
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
          >
            {Number(item.price * item.quantity).toFixed(2).replace('.', ',')}
          </td>
          <td>
            <button
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              type="button"
              onClick={ () => handleRemoveProduct(item.id) }
            >
              Remover
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

Table.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  setProducts: PropTypes.func,
  setTotal: PropTypes.func,
}.isRequired;

export default Table;
