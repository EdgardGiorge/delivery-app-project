import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Product from './Product';
import api from '../../services/axios';
import { getValueTotal } from '../../utils/localStorage';

export default function Products() {
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [valueTotal, setValueTotal] = useState(() => getValueTotal());
  const [isDisable, setIsDisable] = useState(true);
  const history = useHistory();

  useEffect(() => {
    api.get('/customer/products').then((response) => {
      setProducts(response.data);
    }).catch(() => setErrorMessage('API fora do ar :('));
  }, []);

  useEffect(() => {
    if (valueTotal > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [valueTotal]);

  const handleCart = () => {
    history.push('/customer/checkout');
  };

  return (
    <>
      <Header />
      <h1>Tela de Produtos</h1>
      { errorMessage && <p>{errorMessage}</p>}
      <section className="products-section">
        <div className="products-container">
          {
            products.length > 1 && products.map((el) => (
              <Product
                product={ el }
                key={ el.id }
                setValueTotal={ setValueTotal }
              />
            ))
          }
        </div>
        <p>
          <button
            data-testid="customer_products__button-cart"
            type="button"
            onClick={ handleCart }
            disabled={ isDisable }
          >
            Ver Carrinho:
            <h2
              data-testid="customer_products__checkout-bottom-value"
            >
              {' '}
              {valueTotal.toFixed(2).replace('.', ',')}
            </h2>

          </button>
        </p>
      </section>
    </>
  );
}
