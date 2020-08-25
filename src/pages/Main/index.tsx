import React, { useState } from 'react';
import AvatarImage1 from '../../assets/avatar_imgs/IMG_9945.svg';
import Logo from '../../assets/logos/logo.svg';
import Button from '../../components/Button';
import Card from '../../components/Card';
import * as S from './styles';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// definindo propriedades do modal de visualização
interface ModalProps {
  value: boolean;
}

const Main: React.FC = () => {
  //setando configurações via estado para o modal de visualização
  const [openModal, setOpenModal] = useState<ModalProps>({
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
          <Button width="176" height="40" link="" text="Adicionar Naver" />
        </S.HeaderContent>
        <Card
          CardTitle="Juliano Reis"
          CardDescription="Front-end Developer"
          CardImage={AvatarImage1}
          onClick={() =>
            setOpenModal({
              value: true,
            })
          }
        />
      </S.Content>
      <Modal
        styles={{
          modal: {
            padding: 0,
            maxWidth: 'none',
            width: '1006px',
            height: '503px',
          },
        }}
        animationDuration={150}
        open={openModal?.value}
        onClose={() =>
          setOpenModal({
            value: false,
          })
        }
        center
      >
        <S.ModalContent>
          <S.BoxModalImage src={AvatarImage1} />
          <S.BoxContentText>
            <S.ModalTitle>Juliano Reis</S.ModalTitle>
            <S.ModalDescription>Front-end Developer </S.ModalDescription>
            <S.ModalSubTitle>Idade</S.ModalSubTitle>
            <S.ModalSubDescription>Lorem Ipsum</S.ModalSubDescription>
            <S.ModalSubTitle>Tempo de empresa</S.ModalSubTitle>
            <S.ModalSubDescription>Lorem Ipsum</S.ModalSubDescription>
            <S.ModalSubTitle>Projetos que participou</S.ModalSubTitle>
            <S.ModalSubDescription>Lorem Ipsum</S.ModalSubDescription>
          </S.BoxContentText>
        </S.ModalContent>
      </Modal>
    </S.Container>
  );
};

export default Main;
