import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../styles/globalStyles';
import Routes from '../routes/routes';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    function d() {
      if (window.location.pathname !== '/') {
        return setIsValid(true);
      }
    }
    d();
  }, []);

  return (
    <>
      <BrowserRouter>
        {isValid && <Header />}
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
};

export default Layout;
