import React, { ReactNode } from 'react';
import { Container, ChatHeader, UserProfile, UserName, BellIcon, Online, ListOfMessages, BackToSidebarIcon } from './style';
import SendMessage from 'components/SendMessage';
import Message from 'components/Message';

interface Props {
  children?: ReactNode;
  chatId: string;
  onBackToSideBar: any;
}

const ChatWindow: React.FC<Props> = ({ children, chatId, onBackToSideBar }) => {
  // Exemplo de mensagens fictícias
  const messages = [
    { id: '1', content: 'Olá, como você está?', sender: 'user' as const },
    { id: '2', content: 'Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! ', sender: 'other' as const },
    { id: '1', content: 'Olá, como você está?', sender: 'user' as const },
    { id: '2', content: 'Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! ', sender: 'other' as const },
    { id: '1', content: 'Olá, como você está?', sender: 'user' as const },
    { id: '2', content: 'Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! Estou bem, obrigado! ', sender: 'other' as const },

    // ...
  ];  

  return (
    <Container>
      <ChatHeader>
        <BackToSidebarIcon onClick={onBackToSideBar} />
        <UserProfile />
        <UserName>Magno Lindo</UserName>
        <Online />
        <BellIcon />
      </ChatHeader>
      <ListOfMessages>
        {messages.map(message => (
          <Message key={message.id} content={message.content} sender={message.sender} />
        ))}
        {children}
      </ListOfMessages>
      <SendMessage />
    </Container>
  );
};

export default ChatWindow;
