import { useState, useEffect } from 'react';
import SellerOrder from './SellerOrder';
import api from '../../../services/axios';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function SellerOrdersList() {
  const [backEndInfo, setBackEndInfo] = useState([]);

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    const payload = localStorageUser.token ? localStorageUser.token : '';

    api.get('/seller/sales', { headers: { authorization: payload } })
      .then(({ data }) => setBackEndInfo(data))
      .catch((e) => console.error(e));
  }, []);

  console.log('backEndInfo: ', backEndInfo);

  return (
    <div className="SellerOrdersFatherBox">
      {backEndInfo.map((order) => (
        <SellerOrder
          key={ order.id }
          sellerOrderNumber={ order.id }
          sellerOrderStatus={ order.status }
          sellerOrderDate={ order.saleDate }
          sellerOrderPrice={ Number(order.totalPrice) }
          sellerOrderAddress={ order.deliveryAddress }
        />
      ))}
    </div>
  );
}
