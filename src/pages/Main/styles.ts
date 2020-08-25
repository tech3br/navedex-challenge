import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  padding: 20px;
`;

export const LogoNav = styled.img`
  width: 145px;
  height: 37px;
`;

export const Nav = styled.div``;

export const Link = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
`;

export const HeaderContent = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const TitleContent = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #212121;
`;

export const ModalContent = styled.div`
  width: 1006px;
  height: 503px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const BoxContentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30.5px;
`;

export const BoxModalImage = styled.img`
  width: 503px;
  height: 503px;
`;

export const ModalTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 32px;
`;

export const ModalDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

export const ModalSubTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
  margin-top: 24px;
`;

export const ModalSubDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;
