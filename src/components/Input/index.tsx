import React from 'react';

import * as S from './styles';

interface InputProps {
  width: string;
  height: string;
  background: string;
  color: string;
  margin?: string;
  border?: string;  
}

const Input = (props: InputProps) => {
  return (
    <S.Input
      width={props.width}
      height={props.height}
      background={props.background}
      color={props.color}
      margin={props.margin}
    />
  );
};

export default Input;
