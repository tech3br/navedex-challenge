import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import * as S from './styles';
import Logo from '../../assets/logos/logo.svg';
import { api } from '../../services/api';
import { userKey } from '../../global';
import { useHistory } from 'react-router-dom';
import { showError } from '../../global';
import { ToastContainer } from 'react-toastify';
import { global } from '../../config/header';

// preferi separar as props pois para manutencao de erros de valores e mais facil a identificacao
interface EmailProps {
  value: string;
}

interface PasswordProps {
  value: string;
}

const Login: React.FC<any> = () => {
  const history = useHistory();
  //definindo estados para os inputs
  // o estado comeca vazio
  const [emailState, setEmailState] = useState<EmailProps>({
    value: '',
  });
  const [passwordState, setPasswordState] = useState<PasswordProps>({
    value: '',
  });

  //funcao que envia os dados para api e puxa para a pagina main caso esteja tudo certo
  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const email: string = emailState.value;
    const password: string = passwordState.value;

    await api
      .post('/users/login', {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem('userKey', result.data.token);
        global();
        history.push('/main');
      })
      .catch(showError);
  }

  //funcao que obtem o valor do input de email
  const OnChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmailState({ value: event.currentTarget.value });
  };
  //funcao que obtem o valor do input de senha
  const OnChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPasswordState({ value: event.currentTarget.value });
  };

  //caso o token no localstorage esteja vazio retorna para tela de login
  useEffect(() => {
    const json: any = localStorage.getItem(userKey);
    const userData = JSON.parse(json);

    if (userData) {
      history.push('/main');
      return;
    }
  });

  return (
    <S.Container>
      <S.Card>
        <S.Logo src={Logo} alt="logo da nave.rs - foguete ao lado do nave.rs" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <S.EmailGroup>
            <S.Text>E-mail</S.Text>
            <S.Input
              placeholder="E-mail"
              onChange={OnChangeEmail}
              value={emailState.value}
              type="email"
            />
          </S.EmailGroup>
          <S.PasswordGroup>
            <S.Text>Senha</S.Text>
            <S.Input
              placeholder="Senha"
              onChange={OnChangePassword}
              value={passwordState.value}
              type="password"
            ></S.Input>
          </S.PasswordGroup>
          <Button
            width="384"
            height="40"
            text="Entrar"
            background="#212121"
            color="#FFFFFF"
            border="none"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </S.Card>
      <ToastContainer />
    </S.Container>
  );
};

export default Login;
