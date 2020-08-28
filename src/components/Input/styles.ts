import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  background: string;
  color: string;
  margin?: string;
  border?: string;
}

export const Input = styled.input<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
`;
