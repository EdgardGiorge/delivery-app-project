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
    <header>
      <div>
        {
          isAdministrator ? <div>GERÊNCIA USUÁRIOS</div> : (
            <>
              <div>
                <Link
                  to="/customer/products"
                  data-testid="customer_products__element-navbar-link-products"
                >
                  PRODUTOS

                </Link>
              </div>
              <Link
                to="/customer/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                MEUS PRODUTOS

              </Link>
            </>
          )
        }
      </div>
      <div>
        <div>
          <Link
            to="/"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}

          </Link>
          <Link
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
