import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Form() {
  const [error, setError] = useState('');
  const [infos, setInfos] = useState({ name: '', email: '', password: '' });
  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleName = (name) => {
    const minLengthName = 12;

    if (name.length < minLengthName) {
      setError('O nome deve conter pelo menos 11 caracteres');
      return false;
    } return true;
  };

  const handleEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;

    if (!regexEmail.test(email)) {
      setError('O email deve estar no formato correto');
      return false;
    } return true;
  };

  const handlePassword = (password) => {
    const minLengthPassword = 6;
    if (password.length < minLengthPassword) {
      setError('A senha deve conter pelo menos 6 caracteres');
      return false;
    } return true;
  };

  useEffect(() => {
    const verifyPassword = handlePassword(infos.password);
    const verifyName = handleName(infos.name);
    const verifyEmail = handleEmail(infos.email);

    if (verifyPassword && verifyName && verifyEmail) {
      setError('');
      setIsButtonActive(false);
      return;
    }
    setIsButtonActive(true);
  }, [infos]);

  const handleChange = (event) => {
    setInfos({ ...infos, [event.target.id]: event.target.value });
  };

  return (
    <main className="mainForm">
      <form className="login-form">
        <label htmlFor="name">
          Name
          <input
            id="name"
            className="login-input"
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            className="login-input"
            type="email"
            name="email"
            data-testid="common_register__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            className="login-input"
            type="password"
            name="password"
            data-testid="common_register__input-password"
            onChange={ handleChange }
          />
        </label>
      </form>

      <Button
        isButtonActive={ isButtonActive }
        infos={ infos }
        setError={ setError }
      />

      {
        error && <p data-testid="common_register__element-invalid_register">{error}</p>
      }
    </main>
  );
}
