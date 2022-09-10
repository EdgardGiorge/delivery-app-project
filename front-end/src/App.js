import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import './App.css';
import pages from './pages';

/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ pages.Login } />
      <Route exact path="/register" component={ pages.Register } />
      <Route
        exact
        path="/"
        render={ () => <Redirect to="/login" /> }
      />
      <Route
        exact
        path="/customer/checkout"
        component={ pages.Checkout }
      />
      <Route exact path="/customer/orders" component={ pages.Orders } />
      <Route exact path="/customer/products" component={ pages.Products } />
      <Route exact path="/seller/orders/:id" component={ pages.SaleDetails } />

      <Route exact path="/customer/orders/:id" component={ pages.OrdersDetails } />
      <Route exact path="/seller/orders" component={ pages.SellerOrders } />

      <Route exact path="/admin/manage" component={ pages.Admin } />
      <Route exact path="*" component={ pages.NotFound } />
    </Switch>
  );
}

export default App;
