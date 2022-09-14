import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function SellerOrder({
  sellerOrderNumber,
  sellerOrderStatus,
  sellerOrderDate,
  sellerOrderPrice,
  sellerOrderAddress,
}) {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(`/seller/orders/${sellerOrderNumber}`) }
    >
      <div>
        <div>Pedido</div>
        <div
          data-testid={ `seller_orders__element-order-id-${sellerOrderNumber}` }
        >
          {sellerOrderNumber}

        </div>
      </div>
      <div>
        <div
          data-testid={ `seller_orders__element-delivery-status-${sellerOrderNumber}` }
        >
          {sellerOrderStatus}
        </div>
      </div>
      <div>
        <div
          data-testid={ `seller_orders__element-order-date-${sellerOrderNumber}` }
        >

          {sellerOrderDate.split('T')[0]}
        </div>
        <br />
        <div
          data-testid={ `seller_orders__element-card-price-${sellerOrderNumber}` }
        >
          {Number(sellerOrderPrice).toFixed(2).replace('.', ',')}
        </div>
        <div
          data-testid={ `seller_orders__element-card-address-${sellerOrderNumber}` }
        >
          {sellerOrderAddress}
        </div>
      </div>
    </button>
  );
}

SellerOrder.propTypes = {
  sellerOrderNumber: PropTypes.number.isRequired,
  sellerOrderStatus: PropTypes.string.isRequired,
  sellerOrderDate: PropTypes.string.isRequired,
  sellerOrderPrice: PropTypes.number.isRequired,
  sellerOrderAddress: PropTypes.string.isRequired,
};
