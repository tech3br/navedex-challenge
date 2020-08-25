import { Delete, Edit } from '@material-ui/icons/';
import React from 'react';
import * as S from './styles';

interface CardProps {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
  onClick: () => void;
}

const Card = (props: CardProps) => {
  return (
    <S.Container>
      <S.CardImage src={props.CardImage} onClick={props.onClick} />
      <S.CardTitle>{props.CardTitle}</S.CardTitle>
      <S.CardDescription>{props.CardDescription}</S.CardDescription>
      <S.Buttons>
        <Delete
          style={{ cursor: 'pointer' }}
          width="14"
          height="18"
          onClick={() => console.log('Deletar')}
        />
        <Edit
          style={{ cursor: 'pointer' }}
          width="14"
          height="18"
          onClick={() => console.log('Editar')}
        />
      </S.Buttons>
    </S.Container>
  );
};

export default Card;
