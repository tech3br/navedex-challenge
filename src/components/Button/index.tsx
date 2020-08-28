import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';


interface ButtonProps {
  text: string;
  link: string;
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
    <Link
      to={props.link}
      style={{
        padding: 0,
        margin: 0,
        textDecoration: 'none',
        border: 'none',
        outline: 'none',
      }}
    >
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
    </Link>
  );
};

export default Button;
