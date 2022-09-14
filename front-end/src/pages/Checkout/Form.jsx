import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/axios';

export default function Form({ executeSale, products, totalPrice }) {
  const [sellers, setSellers] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSellerId] = useState(0);

  const getSellersAPI = async () => {
    const { data } = await api.get('/customer/sellers');
    setSellers(data);
    setSellerId(data[0].id);
  };

  const handleAdress = ({ target }) => {
    setDeliveryAddress(target.value);
  };

  const handleNumber = ({ target }) => {
    setDeliveryNumber(target.value);
  };

  const handleSeller = ({ target }) => {
    setSellerId(target.value);
  };

  useEffect(() => {
    getSellersAPI();
  }, []);

  const handleClickFinalizar = async () => {
    const sale = {
      infos: {
        totalPrice,
        sellerId,
        deliveryAddress,
        deliveryNumber,
      },
      products,
    };

    await executeSale(sale);
  };

  return (
    <form style={ { marginTop: '40px' } }>
      <label htmlFor="pessoa-vendedora">
        P. Vendedora Responsável
        <select
          value={ sellerId }
          name="pessoa-vendedora"
          className="login-input"
          data-testid="customer_checkout__select-seller"
          onChange={ handleSeller }
        >
          {sellers.map(({ name, id }) => (
            <option key={ name } value={ id }>
              {name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="endereco">
        Endereço
        <input
          type="text"
          id="endereco"
          name="endereco"
          data-testid="customer_checkout__input-address"
          onChange={ handleAdress }
          value={ deliveryAddress }
        />
      </label>
      <label htmlFor="numero-residencia">
        Número
        <input
          type="text"
          id="numero-residencia"
          name="numero-residencia"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ handleNumber }
          value={ deliveryNumber }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClickFinalizar }
      >
        Finalizar pedido
      </button>
    </form>
  );
}

Form.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  totalPrice: PropTypes.number,
  executeSale: PropTypes.func,
}.isRequired;
