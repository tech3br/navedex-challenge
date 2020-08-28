import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import * as S from './styles';
import Button from '../Button';

// definindo propriedades do modal de visualização
interface ModalDeleteProps {
  ModalTitle: string;
  ModalDescription: string;
  open: boolean;
  onClose: () => void;
  onClickCancel: () => void;
  onClickDelete: () => void;
  buttonHide?: boolean;
}

const ModalDelete = (props: ModalDeleteProps) => {
  return (
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
      open={props.open}
      onClose={props.onClose}
      center
    >
      <S.ModalContent>
        <S.ModalTitle>{props.ModalTitle}</S.ModalTitle>
        <S.ModalDescription>{props.ModalDescription}</S.ModalDescription>
        <S.ModalButton>
          {props.buttonHide ? null : (
            <>
              <Button
                width="176"
                height="40"
                text="Cancelar"
                link=""
                background="#FFFFFF"
                color="#212121"
                margin="0px 20px 0px 0px"
                border="1px solid #212121"
              />
              <Button
                width="176"
                height="40"
                text="Excluir"
                link=""
                background="#212121"
                color="#FFFFFF"
                border="1px solid #212121"
              />
            </>
          )}
        </S.ModalButton>
      </S.ModalContent>
    </Modal>
  );
};

export default ModalDelete;
