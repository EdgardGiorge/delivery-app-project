import React from 'react';
import PropTypes from 'prop-types';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function TableDetails({ products }) {
  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitario</th>
        <th>Subtotal</th>
      </tr>
      {products
      && products.map((item, i) => (
        <tr key={ item.nome }>
          <td
            data-testid={ `customer_order_details__element-order-table-item-number-${i}` }
          >
            {i + 1}
          </td>
          <td
            data-testid={ `customer_order_details__element-order-table-name-${i}` }
          >
            {item.name}
          </td>
          <td
            data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
          >
            {item.quantity}
          </td>
          <td
            data-testid={ `customer_order_details__element-order-table-unit-price-${i}` }
          >
            {Number(item.price).toFixed(2).replace('.', ',')}
          </td>
          <td
            data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
          >
            {Number(item.price * item.quantity)
              .toFixed(2)
              .replace('.', ',')}
          </td>
        </tr>
      ))}
    </table>
  );
}

TableDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
}.isRequired;
