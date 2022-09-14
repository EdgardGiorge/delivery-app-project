import React from 'react';
import PropTypes from 'prop-types';

export default function SaleDetailsTable({ items }) {
  console.log('items: ', items);
  const mapItems = items?.map((item, index) => {
    const subTotal = item.price * item.quantity;

    return (
      <tr key={ item.id }>
        <td
          data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
        >
          {item.index}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {item.name}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          {Number(item.quantity)}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          {Number(item.price)}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          {subTotal}
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {mapItems}
      </tbody>
    </table>
  );
}

SaleDetailsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
