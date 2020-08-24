import React from 'react';
import * as S from './styles';

import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Card>
        <S.Logo />
        <S.EmailGroup>
          <S.Text></S.Text>
          <S.Input></S.Input>
        </S.EmailGroup>
        <S.PasswordGroup>
          <S.Text></S.Text>
          <S.Input></S.Input>
        </S.PasswordGroup>
        <Button></Button>
      </S.Card>
    </S.Container>
  );
};

export default Login;
