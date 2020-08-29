import React from 'react';
import Logo from '../../assets/logos/logo.svg';
import * as S from './styles';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();
  // funcao para sair da navedex
  const exit = () => {
    localStorage.removeItem('userKey');
    history.push('/');
  };

  return (
    <>
      <S.Header>
        <S.LogoNav
          src={Logo}
          alt="logo da nave.rs ao lado esquerdo do header"
        />
        <S.Nav>
          <S.Link onClick={exit}>Sair</S.Link>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Header;
