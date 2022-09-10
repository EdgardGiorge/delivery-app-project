import { useState, useEffect } from 'react';
import api from '../../../services/axios';
import Order from './Order';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function OrdersList() {
  const [backEndInfo, setBackEndInfo] = useState([]);

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    const payload = localStorageUser.token ? localStorageUser.token : '';

    api.get('/customer/sales', { headers: { authorization: payload } })
      .then(({ data }) => {
        console.log('data: ', data);
        setBackEndInfo(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="ordersFatherBox">
      {backEndInfo.map((order) => (
        <Order
          key={ order.id }
          orderNumber={ order.id }
          orderStatus={ order.status }
          orderDate={ order.saleDate }
          orderPrice={ Number(order.totalPrice) }
        />
      ))}
    </div>
  );
}
