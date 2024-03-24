import React, { useState } from 'react';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import Footer from 'components/Footer';
import ChatApp from 'components/ChatApp';
import SideBar from 'components/SideBar';
import ChatWindow from 'components/ChatWindow';
import ChatSide from 'components/ChatSide';
import DefaultChat from 'components/DefaultChat';

const Chats: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const handleChatClick = (chatId: string) => {
    setSelectedChat(chatId);
  };

  const handleBackToSidebar = () => {
    setSelectedChat(null);
  };

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
          <ChatApp>
            <SideBar>
              <ChatSide onChatClick={handleChatClick} />
            </SideBar>
            {selectedChat ? (
              <ChatWindow 
                chatId={selectedChat} 
                onBackToSideBar={handleBackToSidebar}
              />
            ) : (
              <DefaultChat />
            )}
          </ChatApp>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Chats;
