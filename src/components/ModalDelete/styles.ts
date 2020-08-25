import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 32px;
`;

export const ModalTitle = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const ModalDescription = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #212121;
  margin-top: 14px;
`;

export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
