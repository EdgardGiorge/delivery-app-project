import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function Order({
  orderNumber,
  orderStatus,
  orderDate,
  orderPrice,
}) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="orderCardBox"
      onClick={ () => history.push(`/customer/orders/${orderNumber}`) }
    >
      <div className="orderNumberBox">
        <div>Pedido</div>
        <div
          className="orderNumber"
          data-testid={ `customer_orders__element-order-id-${orderNumber}` }
        >
          {orderNumber}

        </div>
      </div>
      <div>
        <div
          className="orderStatus"
          data-testid={ `customer_orders__element-delivery-status-${orderNumber}` }
        >
          {orderStatus}
        </div>
      </div>
      <div className="orderDateAndPriceBox">
        <div
          className="orderDate"
          data-testid={ `customer_orders__element-order-date-${orderNumber}` }
        >
          {orderDate.split(' ')[0]}
        </div>
        <br />
        <div
          className="orderPrice"
          data-testid={ `customer_orders__element-card-price-${orderNumber}` }
        >
          {Number(orderPrice).toFixed(2).replace('.', ',')}
        </div>
      </div>
    </button>
  );
}

Order.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderPrice: PropTypes.number.isRequired,
};
