import React from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import Logo from '../../assets/logos/logo.svg';

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Card>
        <S.Logo src={Logo} alt="logo da nave.rs - foguete ao lado do nave.rs" />
        <S.EmailGroup>
          <S.Text>E-mail</S.Text>
          <S.Input placeholder="E-mail"></S.Input>
        </S.EmailGroup>
        <S.PasswordGroup>
          <S.Text>Senha</S.Text>
          <S.Input placeholder="Senha"></S.Input>
        </S.PasswordGroup>
        <Button
          width="384"
          height="40"
          link="main"
          text="Entrar"
          background="#212121"
          color="#FFFFFF"
          border="none"
        />
      </S.Card>
    </S.Container>
  );
};

export default Login;
