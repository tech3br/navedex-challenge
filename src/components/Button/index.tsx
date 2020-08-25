import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface ButtonProps {
  text: string;
  link: string;
  width: string;
  height: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.link}>
      <S.Button width={props.width} height={props.height}>
        {props.text}
      </S.Button>
    </Link>
  );
};

export default Button;
