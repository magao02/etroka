import React from 'react';

import { Container } from './style';

interface Props {
    children?: JSX.Element | JSX.Element[];
  }

const ChatApp: React.FC<Props> = ({children}) => {
  return (
    <Container> {children} </Container>
  );
};

export default ChatApp;
