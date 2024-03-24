import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, UserProfile, ChatInfo, Name, LastMessage, ChatStatus, LastMessageTime, Status} from './styles';
import useAuth from 'hooks/useAuth';

interface ChatSideProps {
  //   id: string
  //   title: string
  //   image: string
  //   owner: any
  onChatClick: (chatId: string) => void;
}

const ChatSide: React.FC<ChatSideProps> = ({ onChatClick }) => {
  // const navigate = useNavigate();
  // const img = 'https://etroka-api-f832735b4e64.herokuapp.com/images/'+props.image;
  // const {auth} = useAuth();
  return (
    <Container>
      <UserProfile/>
      <ChatInfo>
        <Name>Magno Lindo</Name>
        <LastMessage>É interessante essa ideia, porém acho que podemos ajustar e deixar mais justo com um retorno do valor em dinheiro. O que acha?</LastMessage>
      </ChatInfo>
      <ChatStatus>
        <LastMessageTime>19:34</LastMessageTime>
        <Status>Interessado</Status>
      </ChatStatus>
    </Container>
  );
};

export default ChatSide;
