import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  background: string;
  color: string;
  margin?: string;
  borderWidth?: string;
  borderColor?: string;
}

export const Input = styled.input<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  padding: 0px 16px;

`;
