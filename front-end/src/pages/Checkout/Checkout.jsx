import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import Table from './Table';
import Header from '../../components/Header/Header';
import {
  getCartInLocalStorage,
  getValueTotal,
  cleanCart,
} from '../../utils/localStorage';
import api from '../../services/axios';

export default function Checkout() {
  const [products, setProducts] = useState(() => getCartInLocalStorage());
  const [total, setTotal] = useState(() => getValueTotal());
  const [infoUser, setUserInfo] = useState({});
  const history = useHistory();

  const executeSale = async (sale) => {
    try {
      const { data } = await api.post(
        '/customer/sales',
        { sale },
        { headers: { authorization: infoUser.token } },
      );
      const { saleId } = data;
      cleanCart();
      history.push(`/customer/orders/${saleId}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user');
    if (userLocalStorage) {
      setUserInfo(JSON.parse(userLocalStorage));
    } else {
      setUserInfo({ token: 'invalid' });
    }
  }, []);

  return (
    <div>
      <Header />
      <section>
        <h1>Finalizar pedido</h1>
        <Table
          products={ products }
          setProducts={ setProducts }
          setTotal={ setTotal }
        />
        <div>
          <h2>Total: R$</h2>
          <h1 data-testid="customer_checkout__element-order-total-price">
            {Number(total).toFixed(2).replace('.', ',')}
          </h1>
        </div>
      </section>
      <section>
        <Form
          executeSale={ executeSale }
          totalPrice={ total }
          products={ products }
        />
      </section>
    </div>
  );
}
