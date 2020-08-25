import React from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import Logo from '../../assets/logos/logo.svg';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoNav
          src={Logo}
          alt="logo da nave.rs ao lado esquerdo do header"
        />
        <S.Nav>
          <S.Link />
        </S.Nav>
      </S.Header>
      <S.Content>
        <S.HeaderContent>
          <S.TitleContent>Navers</S.TitleContent>
          <Button width="176" height="40" link="" text="" />
        </S.HeaderContent>
      </S.Content>
    </S.Container>
  );
};

export default Main;
