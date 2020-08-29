import React, { useState, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';
import { api } from '../../services/api';
import { showError } from '../../global';
import { success } from '../../config/msgs';
import { ToastContainer } from 'react-toastify';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

interface FormDataProps {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const Add: React.FC<any> = () => {
  const history = useHistory();

  const [formData, setFormData] = useState<FormDataProps>({
    job_role: '',
    admission_date: '',
    birthdate: '',
    project: '',
    name: '',
    url: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function addNaver(event: { preventDefault: () => void }) {
    event.preventDefault();

    await api
      .post('/navers', formData)
      .then(() => {
        success('Naver cadastrado com sucesso!');
        history.push("/main");
      })
      .catch(showError);
  }

  return (
    <S.Container>
      <S.Content>
        <S.HeaderContent>
          <S.LinkComponent to="/main">
            <MdArrowBack size={22} />
          </S.LinkComponent>
          <S.TitleContent>Adicionar Naver</S.TitleContent>
        </S.HeaderContent>
        <S.Body>
          <S.Form onSubmit={addNaver}>
            <div>
              <fieldset>
                <S.Label>Nome</S.Label>
                <Input
                  borderColor="#424242"
                  borderWidth="1px"
                  width="280px"
                  height="40px"
                  background="#FFFFFF"
                  color="#000000"
                  placeholder="Nome"
                  margin="0px 0px 40px 0px"
                  name="name"
                  onChange={handleInputChange}
                />
                <S.Label>Idade</S.Label>
                <Input
                  borderColor="#424242"
                  borderWidth="1px"
                  width="280px"
                  height="40px"
                  background="#FFFFFF"
                  color="#000000"
                  placeholder="Idade"
                  margin="0px 0px 40px 0px"
                  name="birthdate"
                  onChange={handleInputChange}
                />
                <S.Label>Projetos que participou</S.Label>
                <Input
                  borderColor="#424242"
                  borderWidth="1px"
                  width="280px"
                  height="40px"
                  background="#FFFFFF"
                  color="#000000"
                  placeholder="Projetos que participou"
                  margin="0px 0px 40px 0px"
                  name="project"
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset>
                <S.Label>Cargo</S.Label>
                <Input
                  borderColor="#424242"
                  borderWidth="1px"
                  width="280px"
                  height="40px"
                  background="#FFFFFF"
                  color="#000000"
                  placeholder="Cargo"
                  margin="0px 0px 40px 0px"
                  name="job_role"
                  onChange={handleInputChange}
                />
                <S.Label>Tempo de empresa</S.Label>
                <Input
                  borderColor="#424242"
                  borderWidth="1px"
                  width="280px"
                  height="40px"
                  background="#FFFFFF"
                  color="#000000"
                  placeholder="Tempo de empresa"
                  margin="0px 0px 40px 0px"
                  name="admission_date"
                  onChange={handleInputChange}
                />
                <S.Label>URL da foto do Naver</S.Label>
                <Input
                  borderColor="#424242"
                  borderWidth="1px"
                  width="280px"
                  height="40px"
                  background="#FFFFFF"
                  color="#000000"
                  placeholder="URL da foto do Naver"
                  margin="0px 0px 40px 0px"
                  name="url"
                  onChange={handleInputChange}
                />
              </fieldset>
            </div>
            <S.ButtonGroup>
              <Button
                background="#212121"
                color="#ffffff"
                text="Salvar"
                height="40"
                width="176"
                border="0px"
                type="submit"
              />
            </S.ButtonGroup>
          </S.Form>
        </S.Body>
        <ToastContainer />
      </S.Content>
    </S.Container>
  );
};

export default Add;
