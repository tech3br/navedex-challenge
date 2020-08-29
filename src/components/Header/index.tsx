import React from 'react';
import Logo from '../../assets/logos/logo.svg';
import * as S from './styles';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();

  // funcao para deletar o storage
  const handleDeleteStorage = () => {
    localStorage.removeItem('userKey');
  };

  return (
    <>
      <S.Header>
        <S.LogoNav
          src={Logo}
          alt="logo da nave.rs ao lado esquerdo do header"
        />
        <S.Nav>
          <S.LinkComponent to="/" onClick={handleDeleteStorage}>Sair</S.LinkComponent>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Header;
