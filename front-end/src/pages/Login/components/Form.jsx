import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Buttons from './Buttons';
import EMAIL_REGEX from '../../../utils/constants';
import api from '../../../services/axios';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

export default function Form() {
  const [inputInfo, setInputInfo] = useState({ email: '', password: '' });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [authError, setAuthError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (localStorageUser) return history.push('/customer/products');
  }, [history]);

  useEffect(() => {
    const passwordMinLength = 5;
    if (EMAIL_REGEX.test(inputInfo.email)
    && inputInfo.password.length > passwordMinLength) {
      setIsBtnDisabled(false);
      return;
    }
    setIsBtnDisabled(true);
  }, [inputInfo]);

  const saveEmailInputValue = (e) => {
    setInputInfo((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handleEmailInput = (e) => {
    if (e.key === 'Enter') {
      saveEmailInputValue(e);
      return;
    }
    saveEmailInputValue(e);
  };

  const savePasswordInputValue = (e) => {
    setInputInfo((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleUserAuth = async () => {
    try {
      const response = await api.post('/login', inputInfo);

      api.defaults.headers.authorization = response.data.token;

      localStorage.setItem('token', response.data.token);

      history.push('/customer/products');
    } catch (e) {
      setAuthError(e.response.data.message);
    }
  };

  const handlePasswordInput = (e) => {
    if (e.key === 'Enter') {
      savePasswordInputValue(e);
      handleUserAuth();
      return;
    }
    savePasswordInputValue(e);
  };

  return (
    <main className="mainForm">

      <form className="login-form">
        <label htmlFor="emailInput">
          Login
          <input
            id="emailInput"
            className="login-input"
            type="email"
            name="emailInput"
            data-testid="common_login__input-email"
            placeholder="Email"
            onChange={ handleEmailInput }
            onKeyUp={ handleEmailInput }
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            id="passwordInput"
            className="login-input"
            type="password"
            name="passwordInput"
            data-testid="common_login__input-password"
            placeholder="Mínimo 6 caracteres"
            onChange={ handlePasswordInput }
            onKeyUp={ handlePasswordInput }
          />
        </label>
        { authError
        && (
          <p>
            { authError }
          </p>
        )}
        <Buttons inputInfo={ inputInfo } isBtnDisabled={ isBtnDisabled } />
      </form>
    </main>
  );
}
