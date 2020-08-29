import React, { useState, useEffect } from 'react';
import AvatarImage1 from '../../assets/avatar_imgs/IMG_9945.svg';
import Button from '../../components/Button';
import Card from '../../components/Card';
import ModalDelete from '../../components/ModalDelete';
import ModalView from '../../components/ModalView';
import * as S from './styles';
import { api } from '../../services/api';
import { showError } from '../../global';
import { success } from '../../config/msgs';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'react-responsive-modal';
import { useHistory } from 'react-router-dom';

// definindo propriedades do modal de visualização
interface ModalViewProps {
  value: boolean;
}

// definindo propriedades do modal de exclusao
interface ModalDeleteProps {
  value: boolean;
}

// definindo propriedades do modal de feedback
interface ModalFeedbackProps {
  value: boolean;
}

// definindo propriedades do array que ira guardar a lista de navers
interface NaversProps {
  value: [];
}

// definindo propriedades do naver
interface NaverProps {
  admission_date: string;
  birthdate: string;
  id: string;
  job_role: string;
  name: string;
  project: string;
  url: string;
  user_id: string;
}

const Main: React.FC = () => {
  const history = useHistory();
  //setando configurações via estado para o modal de visualização
  const [openModalView, setOpenModalView] = useState<ModalViewProps>({
    value: false,
  });

  //setando configurações via estado para o modal de exclusão
  const [openModalDelete, setOpenModalDelete] = useState<ModalDeleteProps>({
    value: false,
  });

  //setando configurações via estado para o modal de feedback
  const [openModalFeedback, setModalFeedback] = useState<ModalFeedbackProps>({
    value: false,
  });

  //setando valores a serem recebidos no array que ira guardar os navers
  const [navers, setNavers] = useState<NaversProps>({
    value: [],
  });

  //setando valores da propriedades do naver
  const [naverState, setNaverState] = useState<NaverProps>({
    admission_date: '',
    birthdate: '',
    id: '',
    job_role: '',
    name: '',
    project: '',
    url: '',
    user_id: '',
  });

  //calcular idade do naver
  const calcAge = () => {
    var birthday = +new Date(naverState.birthdate);
    const birthdayResult = (Date.now() - birthday) / 31557600000;
    return birthdayResult.toFixed();
  };

  //calcular admissao do naver
  const calcAdmissionDate = () => {
    var admission_date = +new Date(naverState.admission_date);
    const admission_dateResult = (Date.now() - admission_date) / 31557600000;
    return admission_dateResult.toFixed();
  };

  // capturar todos os navers
  const getNavers = () => {
    const token = localStorage.getItem('userKey');
    api
      .get('/navers', { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        setNavers({ value: result.data });
      })
      .catch(showError);
  };

  // deletar um naver pelo ID
  const deleteNaver = () => {
    const token = localStorage.getItem('userKey');
    api
      .delete(`/navers/${naverState.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        success(result.data.message);
        setNavers({ value: result.data });
        setModalFeedback({
          value: true,
        });
      })
      .catch(showError);
  };

  const addNaver = () => {
    history.push('/add');
  };

  const editNaver = () => {
    history.push('/edit/:id');
  };

  useEffect(() => {
    getNavers();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.HeaderContent>
          <S.TitleContent>Navers</S.TitleContent>
          <Button
            width="176"
            height="40"
            text="Adicionar Naver"
            background="#212121"
            color="#FFFFFF"
            border="none"
            onClick={addNaver}
          />
        </S.HeaderContent>
        <S.ContentBox>
          {navers &&
            navers.value.map((naver: NaverProps) => {
              return (
                <Card
                  CardTitle={naver.name}
                  CardDescription={naver.job_role}
                  CardImage={naver.url}
                  onClickCardImage={() => {
                    setOpenModalView({
                      value: true,
                    });
                    setNaverState({
                      id: naver.id,
                      admission_date: naver.admission_date,
                      birthdate: naver.birthdate,
                      job_role: naver.job_role,
                      name: naver.name,
                      project: naver.project,
                      url: naver.url,
                      user_id: naver.user_id,
                    });
                  }}
                  onClickDelete={() => {
                    setNaverState({
                      id: naver.id,
                      admission_date: naver.admission_date,
                      birthdate: naver.birthdate,
                      job_role: naver.job_role,
                      name: naver.name,
                      project: naver.project,
                      url: naver.url,
                      user_id: naver.user_id,
                    });
                    setOpenModalDelete({ value: true });
                  }}
                  onClickEdit={editNaver}
                  key={naver.id}
                />
              );
            })}
        </S.ContentBox>
        <ModalView
          image={AvatarImage1}
          ModalTitle={naverState.name}
          ModalDescription={naverState.job_role}
          ModalSubTitle1="Idade"
          ModalSubDescription1={calcAge()}
          ModalSubTitle2="Tempo de empresa"
          ModalSubDescription2={calcAdmissionDate() + ' Ano(s)'}
          ModalSubTitle3="Projetos que participou"
          ModalSubDescription3={naverState.project}
          open={openModalView.value}
          onClose={() => setOpenModalView({ value: false })}
          onClickDelete={() => {
            setOpenModalDelete({ value: true });
          }}
          onClickEdit={editNaver}
          key={naverState.id}
        />
        <ModalDelete
          open={openModalDelete.value}
          onClose={() => setOpenModalDelete({ value: false })}
          ModalTitle="Excluir Naver"
          ModalDescription="Tem certeza que deseja excluir este Naver?"
          onClickDelete={deleteNaver}
          onClickCancel={() => {
            setOpenModalDelete({ value: false });
          }}
        />
        <Modal
          styles={{
            modal: {
              padding: 0,
              maxWidth: 'none',
              width: '592px',
              height: '233px',
            },
          }}
          animationDuration={150}
          open={openModalFeedback.value}
          onClose={() =>
            setModalFeedback({
              value: false,
            })
          }
          center
        >
          <h1>Naver excluído</h1>
          <p>Naver excluído com sucesso!</p>
        </Modal>
      </S.Content>
      <ToastContainer />
    </S.Container>
  );
};

export default Main;
