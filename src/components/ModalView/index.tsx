import { Delete, Edit } from '@material-ui/icons/';
import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import * as S from './styles';

// definindo propriedades do modal de visualização
interface ModalViewProps {
  ModalTitle: string;
  ModalDescription: string;
  ModalSubTitle1: string;
  ModalSubDescription1: string;
  ModalSubTitle2: string;
  ModalSubDescription2: string;
  ModalSubTitle3: string;
  ModalSubDescription3: string;
  image: string;
  open: boolean;
  onClose: () => void;
  onClickDelete: () => void;
  onClickEdit: () => void;
}

const ModalView = (props: ModalViewProps) => {
  return (
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
      open={props.open}
      onClose={props.onClose}
      center
    >
      <S.ModalContent>
        <S.BoxModalImage src={props.image} />
        <S.BoxContentText>
          <S.ModalTitle>{props.ModalTitle}</S.ModalTitle>
          <S.ModalDescription>{props.ModalDescription}</S.ModalDescription>
          <S.ModalSubTitle>{props.ModalSubTitle1}</S.ModalSubTitle>
          <S.ModalSubDescription>
            {props.ModalSubDescription1}
          </S.ModalSubDescription>
          <S.ModalSubTitle>{props.ModalSubTitle2}</S.ModalSubTitle>
          <S.ModalSubDescription>
            {props.ModalSubDescription2}
          </S.ModalSubDescription>
          <S.ModalSubTitle>{props.ModalSubTitle3}</S.ModalSubTitle>
          <S.ModalSubDescription>
            {props.ModalSubDescription3}
          </S.ModalSubDescription>
          <S.ModalIcons>
            <Delete
              style={{ cursor: 'pointer', margin: '8px' }}
              width="14"
              height="18"
              onClick={props.onClickDelete}
            />
            <Edit
              style={{ cursor: 'pointer', margin: '8px' }}
              width="14"
              height="18"
              onClick={props.onClickEdit}
            />
          </S.ModalIcons>
        </S.BoxContentText>
      </S.ModalContent>
    </Modal>
  );
};

export default ModalView;
