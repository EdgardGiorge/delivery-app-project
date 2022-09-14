import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SaleDetailsTable from './SaleDetailTable';
import api from '../../utils/axios';

const TESTID = 'seller_order_details__element-order-details-label-delivery-status';

const fakeSaleItems = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.2,
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    quantity: 5,
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.5,
    urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
    quantity: 10,
  },
];

export default function SaleDetails() {
  const [sale, setSale] = useState([]);

  const { pathname } = useLocation();
  const id = pathname.split('/')[3];

  useEffect(() => {
    const localStorageAdmin = JSON.parse(localStorage.getItem('user'));
    const payload = localStorageAdmin.token ? localStorageAdmin.token : '';

    // mudar o backend para a api retornar a venda com os itens vendidos e suas quantidades.
    api.get(`/seller/sales/${id}`, { headers: { authorization: payload } })
      .then(({ data }) => {
        console.log('data: ', data);
        const apiWithFakeItems = { ...data, items: fakeSaleItems };
        setSale(apiWithFakeItems);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div>
      <h1>Detalhes do Pedido</h1>
      <div>
        <div>
          <p>PEDIDO: </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {sale.id}
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {sale.saleDate}
          </p>
          <p
            data-testid={ TESTID }
          >
            {sale.status}
          </p>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => {} }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ () => {} }
          >
            SAIU PARA ENTREGA
          </button>
        </div>
        <SaleDetailsTable items={ sale.items } />
        <div>
          <p>Total: R$</p>
          <p
            data-testid="seller_order_details__element-order-total-price"
          >
            {sale.totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
