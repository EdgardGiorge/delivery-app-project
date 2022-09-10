import React from 'react';
import PropTypes from 'prop-types';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function UserTable({ users }) {
  const mapRows = users.length > 0 && users.map((user, index) => (
    <tr key={ user.id }>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        {index}

      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        {user.name}

      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        {user.email}

      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        {user.role}

      </td>
      <td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          onClick={ () => {} }
        >
          Excluir
        </button>

      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {mapRows}
      </tbody>
    </table>
  );
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })).isRequired,
};
