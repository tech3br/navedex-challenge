import React from 'react';
import * as S from './styles';

interface ButtonProps {
  text: string;
  width: string;
  height: string;
  background: string;
  color: string;
  margin?: string;
  border?: string;
  onClick?: any;
  type?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <S.Button
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      background={props.background}
      color={props.color}
      margin={props.margin}
      border={props.border}
      type={props.type}
    >
      {props.text}
    </S.Button>
  );
};

export default Button;
