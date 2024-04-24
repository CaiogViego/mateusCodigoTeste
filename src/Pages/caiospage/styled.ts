import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  color: string;
  borderColor: string;
}

export const Container = styled.div<ContainerProps>`

  /* Color the border and text with theme.main */
  color: ${props => props.color};
  border: 2px solid ${props => props.borderColor};
  width: 200px;
`;


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
