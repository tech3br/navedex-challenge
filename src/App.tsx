import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import Routes from './routes/routes';
import Header from './components/Header';

// Componente funcional principal App
function App() {
  return (
    <>
      {window.location.pathname === '/' ? null : <Header />}
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
