import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const LinkComponent = styled(Link)`
  color: #000000;
  text-decoration: none;
  width: 11px;
  height: 19px;
`;

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
  justify-content: center;
  margin-bottom: 36px;
`;

export const TitleContent = styled.div`
  margin-left: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #212121;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #212121;
  width: 280px;
  text-align: left;
  margin-bottom: 4px;
`;

export const Form = styled.form`
  > div {
    display: flex;
    flex-direction: row;

    > fieldset {
      border: none;
      &:nth-child(2) {
        margin-left: 24px;
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
