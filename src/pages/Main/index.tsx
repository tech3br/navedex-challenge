import React, { useState } from 'react';
import AvatarImage1 from '../../assets/avatar_imgs/IMG_9945.svg';
import Logo from '../../assets/logos/logo.svg';
import Button from '../../components/Button';
import Card from '../../components/Card';
import ModalView from '../../components/ModalView';
import ModalDelete from '../../components/ModalDelete';
import * as S from './styles';

// definindo propriedades do modal de visualização
interface ModalViewProps {
  value: boolean;
}

interface ModalDeleteProps {
  value: boolean;
}

const Main: React.FC = () => {
  //setando configurações via estado para o modal de visualização
  const [openModalView, setOpenModalView] = useState<ModalViewProps>({
    value: false,
  });
  //setando configurações via estado para o modal de exclusão
  const [openModalDelete, setOpenModalDelete] = useState<ModalDeleteProps>({
    value: false,
  });

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
          <Button
            width="176"
            height="40"
            link=""
            text="Adicionar Naver"
            background="#212121"
            color="#FFFFFF"
            border="none"
          />
        </S.HeaderContent>
        <Card
          CardTitle="Juliano Reis"
          CardDescription="Front-end Developer"
          CardImage={AvatarImage1}
          onClickCardImage={() =>
            setOpenModalView({
              value: true,
            })
          }
          onClickDelete={() => setOpenModalDelete({ value: true })}
          onClickEdit={() => console.log('editar')}
        />
      </S.Content>
      <ModalView
        image={AvatarImage1}
        ModalTitle="teste"
        ModalDescription="teste2"
        ModalSubTitle1="teste3"
        ModalSubDescription1="teste4"
        ModalSubTitle2="teste3"
        ModalSubDescription2="teste4"
        ModalSubTitle3="teste3"
        ModalSubDescription3="teste4"
        open={openModalView.value}
        onClose={() => setOpenModalView({ value: false })}
        onClickDelete={() => console.log('Delete')}
        onClickEdit={() => console.log('Edit')}
      />
      <ModalDelete
        open={openModalDelete.value}
        onClose={() => setOpenModalDelete({ value: false })}
        ModalTitle="Excluir Naver"
        ModalDescription="Tem certeza que deseja excluir este Naver?"
        onClickDelete={() => console.log('deletado')}
        onClickCancel={() => {
          return setOpenModalDelete({ value: false });
        }}
      />
    </S.Container>
  );
};

export default Main;
