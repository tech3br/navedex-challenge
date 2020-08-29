import React, { useState, FormEvent, ChangeEvent } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './styles';
import { api } from '../../services/api';
import { showError } from '../../global';
import { success } from '../../config/msgs';
import { ToastContainer } from 'react-toastify';

interface NameProps {
  value: string;
}
interface IdadeProps {
  value: string;
}
interface ProjectProps {
  value: string;
}
interface JobRoleProps {
  value: string;
}
interface AdmissionDateProps {
  value: string;
}
interface URLProps {
  value: string;
}

interface NaverProps {
  id: string;
}

const Edit: React.FC<any> = (props: any) => {
  const { match } = props;
  const [naver, setNaver] = useState<NaverProps>({ id: match.params.id });
  console.log(match);

  const [nameState, setNameState] = useState<NameProps>({
    value: '',
  });

  const [idadeState, setIdadeState] = useState<IdadeProps>({
    value: '',
  });

  const [projectState, setProjectState] = useState<ProjectProps>({
    value: '',
  });

  const [jobRoleState, setJobRoleState] = useState<JobRoleProps>({
    value: '',
  });

  const [admissionDateState, setAdmissionDateState] = useState<
    AdmissionDateProps
  >({
    value: '',
  });

  const [urlState, setURLState] = useState<URLProps>({
    value: '',
  });

  const OnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNameState({ value: event.currentTarget.value });
  };

  const OnChangeIdade = (event: React.FormEvent<HTMLInputElement>) => {
    setIdadeState({ value: event.currentTarget.value });
  };

  const OnChangeProject = (event: React.FormEvent<HTMLInputElement>) => {
    setProjectState({ value: event.currentTarget.value });
  };

  const OnChangeJobRole = (event: React.FormEvent<HTMLInputElement>) => {
    setJobRoleState({ value: event.currentTarget.value });
  };

  const OnChangeAdmissionDate = (event: React.FormEvent<HTMLInputElement>) => {
    setAdmissionDateState({ value: event.currentTarget.value });
  };

  const OnChangeURL = (event: React.FormEvent<HTMLInputElement>) => {
    setURLState({ value: event.currentTarget.value });
  };

  async function editNaver(event: { preventDefault: () => void }) {
    event.preventDefault();

    const job_role = jobRoleState;
    const admission_date = admissionDateState;
    const birthdate = idadeState;
    const project = projectState;
    const name = nameState;
    const url = urlState;

    const data = {
      job_role,
      admission_date,
      birthdate,
      project,
      name,
      url,
    };

    const token = localStorage.getItem('userKey');
    console.log(token);

    await api
      .put(`/navers/${naver.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data,
      })
      .then((result) => {
        console.log(result.data);
        success(result.data);
      })
      .catch(showError);
  }

  return (
    <S.Container>
      <S.Content>
        <S.HeaderContent>
          <S.LinkComponent to="/main">{'→'}</S.LinkComponent>
          <S.TitleContent>Editar Naver</S.TitleContent>
        </S.HeaderContent>
        <S.Body>
          <S.Form onSubmit={editNaver}>
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
                  onChange={OnChangeName}
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
                  onChange={() => OnChangeIdade}
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
                  onChange={() => OnChangeProject}
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
                  onChange={() => OnChangeJobRole}
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
                  onChange={() => OnChangeAdmissionDate}
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
                  onChange={() => OnChangeURL}
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

export default Edit;
