import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Products() {
  const [userName, setUserName] = useState('');
  const [isAdministrator, setIsAdministrator] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user.name);
    if (pathname.includes('/admin/manage')) return setIsAdministrator(true);
    setIsAdministrator(false);
  }, [pathname]);

  return (
    <header className="client-products-header">
      <div className="header-nav-links-container">
        {
          isAdministrator ? <div>GERÊNCIA USUÁRIOS</div> : (
            <>
              <div className="products-link">
                <Link
                  className="remove-underline products"
                  to="/customer/products"
                  data-testid="customer_products__element-navbar-link-products"
                >
                  PRODUTOS

                </Link>
              </div>
              <Link
                className="remove-underline my-products"
                to="/customer/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                MEUS PRODUTOS

              </Link>
            </>
          )
        }
      </div>
      <div className="header-nav-links-container">
        <div className="products-link">
          <Link
            className="remove-underline client-name"
            to="/"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}

          </Link>
          <Link
            className="remove-underline leave"
            to="/"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => localStorage.removeItem('user') }
          >
            SAIR

          </Link>
        </div>
      </div>
    </header>
  );
}
