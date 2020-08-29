import { Delete, Edit } from '@material-ui/icons/';
import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

interface CardProps {
  CardImage: string;
  CardTitle: string;
  CardDescription: string;
  onClickCardImage: () => void;
  onClickDelete: () => void;
  onClickEdit: () => void;
  idUser: string;
}

const Card = (props: CardProps) => {
  const newTo = {
    id: props.idUser,
  };

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
        <Link style={{ textDecoration: 'none', color: "#000000" }} to={`/edit/${newTo.id}`}>
          <Edit
            style={{ cursor: 'pointer', margin: '8px' }}
            width="14"
            height="18"
            onClick={props.onClickEdit}
          />
        </Link>
      </S.Buttons>
    </S.Container>
  );
};

export default Card;
