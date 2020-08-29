import styled from 'styled-components';
import { Link } from "react-router-dom";

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

export const LinkComponent = styled(Link)`

  color: #000000;

  &:hover {
    cursor: pointer;
  }
`;
