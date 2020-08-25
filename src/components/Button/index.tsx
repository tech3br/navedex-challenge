import React, { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  return <S.Button>{props.text}</S.Button>;
};

export default Button;
