import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  background: string;
  color: string;
  margin?: string;
  border?: string;
}

export const Button = styled.button<Props>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height+ "px"};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  line-height: 24px;
  margin-top: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  outline: none;

  &:hover {
    cursor: pointer;
    background: #282828;
    color: #FFFFFF;
  }
`;
