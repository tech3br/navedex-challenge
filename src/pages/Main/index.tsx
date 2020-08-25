import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import * as S from './styles';
import Logo from '../../assets/logos/logo.svg';
import AvatarImage1 from '../../assets/avatar_imgs/IMG_9945.svg';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoNav
          src={Logo}
          alt="logo da nave.rs ao lado esquerdo do header"
        />
        <S.Nav>
          <S.Link>Sair</S.Link>
        </S.Nav>
      </S.Header>
      <S.Content>
        <S.HeaderContent>
          <S.TitleContent>Navers</S.TitleContent>
          <Button width="176" height="40" link="" text="Adicionar Naver" />
        </S.HeaderContent>
        <Card
          CardTitle="Juliano Reis"
          CardDescription="Front-end Developer"
          CardImage={AvatarImage1}
        />
      </S.Content>
    </S.Container>
  );
};

export default Main;
