import React from 'react';

import {ContainerReturnToPage, ReturnToPageIcon, SearchIcon, TitleSection} from './style';
import searchIcon from 'assets/img/lupa.png';

import { Link } from 'react-router-dom';
import { Container, Header, SearchBar, SearchInput, ChatList } from './style';
import ChatSide from 'components/ChatSide';

interface Props {
    children?: JSX.Element | JSX.Element[];
  }

const SideBar: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <Header>
        <TitleSection>
          <ContainerReturnToPage>
            <Link to="/Announcements">
              <ReturnToPageIcon />
            </Link>
          </ContainerReturnToPage>
          Chats
        </TitleSection>
        <SearchBar>
          <SearchIcon />
          <SearchInput placeholder='Pesquisar'/>
        </SearchBar>
      </Header>
      <ChatList> { children } </ChatList>
     </Container>
  );
};

export default SideBar;
