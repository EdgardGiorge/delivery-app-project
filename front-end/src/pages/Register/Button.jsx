import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import api from '../../utils/axios';

export default function Button({ isButtonActive, infos, setError }) {
  const history = useHistory();

  const handleButton = async () => {
    try {
      const result = await api.post('/register', infos);

      const user = {
        name: result.data.name,
        email: result.data.email,
        role: result.data.role,
        token: result.data.token,
      };

      localStorage.setItem('user', JSON.stringify(user));

      history.push('/customer/products');
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <button
      type="button"
      data-testid="common_register__button-register"
      disabled={ isButtonActive }
      onClick={ handleButton }
    >
      Cadastrar
    </button>
  );
}

Button.propTypes = {
  isButtonActive: PropTypes.bool.isRequired,
  infos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  setError: PropTypes.func.isRequired,
};
