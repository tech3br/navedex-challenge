import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoNav />
        <S.Nav>
          <S.Link />
        </S.Nav>
      </S.Header>
    </S.Container>
  );
};

export default Main;
