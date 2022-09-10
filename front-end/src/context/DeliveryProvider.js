import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deliveryContext from './deliveryContext';

export default function DeliveryProvider({ children }) {
  const [productQuantityArray, setProductQuantityArray] = useState([]);

  const values = React.useMemo(() => ({
    productQuantityArray, setProductQuantityArray,
  }), [productQuantityArray]);

  return (
    <deliveryContext.Provider value={ values }>
      { children }
    </deliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
