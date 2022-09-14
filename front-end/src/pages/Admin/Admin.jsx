import React from 'react';
import AdminManage from './AdminManage';
import Header from '../../components/Header/Header';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function Admin() {
  return (
    <div>
      <Header />
      <AdminManage />
    </div>
  );
}
