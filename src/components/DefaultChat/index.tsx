import React, { ReactNode } from 'react';
import { Container } from './styles';
import { IconChat } from './styles';

interface Props {
}

const DefaultChat: React.FC<Props> = () => {
  return (
    <Container>
      <IconChat/>
      Seja Bem-Vindo(a) ao Chat!
    </Container>
  );
};

export default DefaultChat;
