import { Delete, Edit } from '@material-ui/icons/';
import React from 'react';
import * as S from './styles';

interface CardProps {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
  onClickCardImage: () => void;
  onClickDelete: () => void;
  onClickEdit: () => void;
}

const Card = (props: CardProps) => {
  return (
    <S.Container>
      <S.CardImage src={props.CardImage} onClick={props.onClickCardImage} />
      <S.CardTitle>{props.CardTitle}</S.CardTitle>
      <S.CardDescription>{props.CardDescription}</S.CardDescription>
      <S.Buttons>
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
      </S.Buttons>
    </S.Container>
  );
};

export default Card;
