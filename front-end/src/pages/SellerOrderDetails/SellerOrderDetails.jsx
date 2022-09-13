import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import DetailsTable from './components/DetailsTable';

export default function SellerOrderDetails() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderById = async () => {
      const token = localStorage.getItem('token');

      api.defaults.headers.authorization = token;

      const response = await api.get(`/seller/orders/${id}`);
      setOrders(response.data);
    };

    getOrderById();
  }, [id]);

  return (
    <div className="order-details-container">
      <h2>Detalhes do Pedido</h2>
      <DetailsTable orderDetails={ orders } />
    </div>
  );
}
