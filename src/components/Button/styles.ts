import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
}

export const Button = styled.button<Props>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height+ "px"};
  line-height: 24px;
  margin-top: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  background: #212121;
  color: #ffffff;
  border-style: none;
  outline: none;

  &:hover {
    cursor: pointer;
    background: #282828;
  }
`;
