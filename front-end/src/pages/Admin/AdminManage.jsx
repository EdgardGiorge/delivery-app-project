import React, { useEffect, useState } from 'react';
import Form from './Form';
import UserTable from './UserTable';
import api from '../../utils/axios';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function AdminManage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localStorageAdmin = JSON.parse(localStorage.getItem('user'));
    const payload = localStorageAdmin.token ? localStorageAdmin.token : '';

    api.get('/admin/manage', { headers: { authorization: payload } })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((e) => console.error(e));
  }, [users]);

  const handleUpdate = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  return (
    <div>
      <div>
        <h2>Cadastro de usuário</h2>
        <div>
          <Form updateUsers={ handleUpdate } />
        </div>
      </div>
      <div>
        <h2>Lista de usuário</h2>
        <UserTable users={ users } />
      </div>
    </div>
  );
}
