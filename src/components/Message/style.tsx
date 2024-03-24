import styled from 'styled-components';

// Estilização básica do componente de mensagem
export const MessageContainer = styled.div<{ sender: 'user' | 'other' }>`
  display: flex;
  align-items: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  margin: ${({ sender }) => (sender === 'user' ? '8px 40px 8px 8px' : '8px 8px 8px 40px')};

  @media (max-width: 768px) {
    margin: ${({ sender }) => (sender === 'user' ? '8px 16px 8px 8px' : '8px 8px 8px 16px')};
  }
`;

export const MessageBubble = styled.div<{ sender: 'user' | 'other' }>`
  background-color: ${({ sender }) => (sender === 'user' ? '#4C0C6C' : '#D9D9D9')};
  color: ${({ sender }) => (sender === 'user' ? '#FFF' : '#000')};
  border-radius: ${({ sender }) => (sender === 'user' ? '8px 8px 0px 8px' : '8px 8px 8px 0px')};
  padding: 8px 12px;
  max-width: 70%;
  margin-left: ${({ sender }) => (sender === 'user' ? 'auto' : 'none')};
`;

export const MessageText = styled.p`
  margin: 0;
`;
