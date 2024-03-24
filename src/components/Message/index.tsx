import React from 'react';
import { MessageContainer, MessageBubble, MessageText } from './style';

const Message: React.FC<{ content: string; sender: 'user' | 'other' }> = ({ content, sender }) => {
  return (
    <MessageContainer sender={sender}>
      <MessageBubble sender={sender}>
        <MessageText>{content}</MessageText>
      </MessageBubble>
    </MessageContainer>
  );
};

export default Message;
