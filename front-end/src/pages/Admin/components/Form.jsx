import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../../utils/axios';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function Form({ updateUsers }) {
  const [infos, setInfos] = useState({
    name: '', email: '', password: '', role: 'customer',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState('');
  const [existsMessage, setExistsMessage] = useState(false);

  const handleRegister = (userInfo) => {
    const localStorageAdmin = JSON.parse(localStorage.getItem('user'));
    const payload = localStorageAdmin.token ? localStorageAdmin.token : '';

    api.post('/admin/manage', userInfo, { headers: { authorization: payload } })
      .then(() => {})
      .catch((e) => {
        const statusCode = 409;
        if (e.response.status === statusCode) {
          return setExistsMessage(true);
        }
        setExistsMessage(false);
        console.error(e);
      });
    api.get('/admin/manage', { headers: { authorization: payload } })
      .then(({ data }) => updateUsers(data))
      .catch((e) => console.error(e));
  };

  const handleName = (name) => {
    const minLengthName = 12;
    if (name.length < minLengthName) {
      setError('O nome deve conter pelo menos 11 caracteres');
      return false;
    }
    return true;
  };

  const handleEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;

    if (!regexEmail.test(email)) {
      setError('O email deve estar no formato correto');
      return false;
    }
    return true;
  };

  const handlePassword = (password) => {
    const minLengthPassword = 6;
    if (password.length < minLengthPassword) {
      setError('A senha deve conter pelo menos 6 caracteres');
      return false;
    }
    return true;
  };

  useEffect(() => {
    const verifyName = handleName(infos.name);
    const verifyEmail = handleEmail(infos.email);
    const verifyPassword = handlePassword(infos.password);

    if (verifyName && verifyEmail && verifyPassword) {
      setError('');
      return setIsDisabled(false);
    }
    setIsDisabled(true);
  }, [infos]);

  const handleChange = (e) => {
    setInfos({ ...infos, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          data-testid="admin_manage__input-name"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          data-testid="admin_manage__input-email"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="role">
        Type
        <select
          id="role"
          data-testid="admin_manage__select-role"
          onChange={ handleChange }
        >
          <option>customer</option>
          <option>seller</option>
          <option>admin</option>
        </select>
      </label>
      <button
        id="register"
        type="button"
        disabled={ isDisabled }
        onClick={ () => handleRegister(infos) }
        data-testid="admin_manage__button-register"
      >
        CADASTRAR
      </button>
      <div>
        {
          error && <p data-testid="admin_manage__element-invalid-register">{error}</p>
        }
      </div>
      <div>
        {
          existsMessage
            && <p data-testid="admin_manage__element-invalid-register">Já existe</p>
        }
      </div>
    </div>
  );
}

Form.propTypes = {
  updateUsers: PropTypes.func.isRequired,
};
