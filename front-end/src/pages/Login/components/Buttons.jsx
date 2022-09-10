import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import api from '../../../services/axios';

export default function Buttons({ isBtnDisabled, inputInfo }) {
  const [authError, setAuthError] = useState('');
  const history = useHistory();
  const authUser = () => {
    api.post('/login', inputInfo).then((payload) => {
      const user = {
        name: payload.data.name,
        email: payload.data.email,
        role: payload.data.role,
        token: payload.data.token,
      };

      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'customer') return history.push('/customer/products');
      if (user.role === 'seller') return history.push('/seller/orders');

      history.push('/admin/manage');
    }).catch(() => setAuthError('Usuário não encontrado'));
  };

  return (
    <>
      { authError
        && (
          <p data-testid="common_login__element-invalid-email">
            { authError }
          </p>
        )}
      <button
        type="button"
        data-testid="common_login__button-login"
        className={ `login-btn ${isBtnDisabled ? 'login-btn-id' : 'goDarkerGreen'} ` }
        disabled={ isBtnDisabled }
        onClick={ authUser }
      >
        LOGIN
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
        className="login-btn password-btn"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
    </>
  );
}

Buttons.propTypes = {
  isBtnDisabled: PropTypes.bool,
  inputInfo: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
}.isRequired;
