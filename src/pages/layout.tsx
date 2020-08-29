import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../styles/globalStyles';
import Routes from '../routes/routes';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const userKey = localStorage.getItem('userKey');

  useEffect(() => {
    if (userKey) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {isValid === true ? <Header /> : null}
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Layout;
