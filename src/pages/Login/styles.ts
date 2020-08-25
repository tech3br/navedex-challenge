import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 448px;
  height: 408px;
  border: 1px solid #212121;
`;

export const Logo = styled.img`
  width: 235px;
  height: 60px;
  margin-top: 40px;
`;
export const EmailGroup = styled.div`
  margin-top: 40px;
`;
export const PasswordGroup = styled.div`
  margin-top: 32px;
`;
export const Text = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  color: #212121;
  margin-bottom: 4px;
`;
export const Input = styled.input`
  width: 384px;
  height: 40px;
  padding-left: 4px;
  background: #ffffff;
  border: 1px solid #424242;
`;
