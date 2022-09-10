import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TableDetails from './components/TableDetails';
import api from '../../services/axios';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

const prefix = 'customer_order_details';

export default function OrdersDetails() {
  const { id: idOrder } = useParams();
  const [products, setProducts] = useState([]);
  const [infoUser, setInfoUser] = useState({});
  const [seller, setSeller] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [saleDate, setSaleDate] = useState('');
  const [saleStatus, setSaleStatus] = useState('');

  const URL = `/customer/sales/${idOrder}`;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setInfoUser(user);
    if (user) {
      api
        .get(URL, { headers: { authorization: user.token } })
        .then(({ data }) => {
          console.log(data);
          setProducts(data.products);
          setTotalPrice(data.totalPrice);
          setSeller(data.seller.name);
          setSaleDate(data.sale.saleDate.split(' ')[0]);
          setSaleStatus(data.status);
        })
        .catch((error) => console.log(error));
    }
  }, [URL]);

  const handleclickCheck = async () => {
    const response = await api.patch(
      URL,
      { status: 'Entregue' },
      { headers: { authorization: infoUser.token } },
    );
    if (response.statusText === 'OK') {
      setSaleStatus('Entregue');
    }
  };

  return (
    <div>
      <Header />
      <h1>Detalhes do pedido</h1>
      <div>
        <div>
          <span>PEDIDO: </span>
          <span data-testid={ `${prefix}__element-order-details-label-order-id` }>
            {idOrder}
          </span>
        </div>
        <div>
          <span>P. Venda: </span>
          <span
            data-testid={ `${prefix}__element-order-details-label-seller-name` }
          >
            {seller}
          </span>
        </div>
        <div>
          <span
            data-testid={ `${prefix}__element-order-details-label-order-date` }
          >
            {saleDate}
          </span>
        </div>
        <div>
          <span
            data-testid={ `${prefix}__element-order-details-label-delivery-status` }
          >
            {saleStatus}
          </span>
        </div>
        <div>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            onClick={ handleclickCheck }
            disabled
          >
            Marcar como Entregue
          </button>
        </div>
      </div>
      <TableDetails products={ products } />
      <div>
        <h2>Total: R$</h2>
        <h1 data-testid="customer_order_details__element-order-total-price">
          {Number(totalPrice).toFixed(2).replace('.', ',')}
        </h1>
      </div>
    </div>
  );
}
