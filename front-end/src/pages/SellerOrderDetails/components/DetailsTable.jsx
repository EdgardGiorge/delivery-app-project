import React from 'react';
import PropTypes from 'prop-types';
import './detailsTable.css';

export default function DetailsTable({ orderDetails }) {
  console.log(orderDetails);
  const tableHeaderCells = ['item',
    'descricao', 'quantidade', 'valor unitario', 'sub-total'];

  return (
    <div className="sales-container">
      <div className="header-details">
        <div>
          <span>{ `Pedido: ${orderDetails.id}` }</span>
          <span className="sale-date">
            { orderDetails.saleDate
          && orderDetails.saleDate.split('T')[0].split('-').reverse().join('/') }
          </span>
          <span className="sale-status">{ orderDetails.status }</span>
        </div>
        <div>
          <button className="btn-preparing-check" type="button">Preparando</button>
          <button className="btn-dispatch-check" type="button">
            Saiu para entrega

          </button>
        </div>
      </div>
      <div className="sub-sales-container">
        <table>
          <thead>
            <tr>
              {
                tableHeaderCells.map((el) => <th key={ el }>{ el }</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              orderDetails.products && orderDetails.products.map((product) => (
                <tr key={ product.id }>
                  <td className="product-info-id">{ product.id }</td>
                  <td
                    className="product-info-table"
                  >
                    { product.name }

                  </td>
                  <td
                    className="product-info-table"
                  >
                    { product.salesProducts.quantity }

                  </td>
                  <td className="product-info-table">{ product.price }</td>
                  <td
                    className="product-info-table"
                  >
                    { product.price * product.salesProducts.quantity }

                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
        <div className="sale-total">
          <span className="span-total">
            Total: R$
            {
              `
            ${orderDetails.products && orderDetails.products.reduce((acc, el) => (
      acc + (el.price * el.salesProducts.quantity)
    ), 0).toFixed(2).toString().replace('.', ',')}
    `
            }
          </span>
        </div>
      </div>
    </div>

  );
}

DetailsTable.propTypes = {
  orderDetails: PropTypes.oneOfType({
    id: PropTypes.number,
    userId: PropTypes.number,
    sellerId: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    user_id: PropTypes.number,
    seller_id: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.string,
        urlImage: PropTypes.string,
        salesProducts: PropTypes.shape({
          sale_id: PropTypes.number,
          product_id: PropTypes.number,
          quantity: PropTypes.number,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
