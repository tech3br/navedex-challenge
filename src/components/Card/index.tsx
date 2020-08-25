import React from 'react';
import * as S from './styles';
import { Delete } from '@material-ui/icons';

interface CardProps {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
  Icons: React.FunctionComponent;
}

const Card = (props: CardProps) => {
  return (
    <S.Container>
      <S.CardImage src={props.CardImage} />
      <S.CardTitle>{props.CardTitle}</S.CardTitle>
      <S.CardDescription>{props.CardDescription}</S.CardDescription>
      <S.Buttons>
        <Delete />
      </S.Buttons>
    </S.Container>
  );
};

export default Card;
