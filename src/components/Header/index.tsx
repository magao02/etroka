import React, {useState} from 'react';
import useAuth from 'hooks/useAuth';
import {useNavigate} from 'react-router-dom';

import MenuOverlay from 'components/MenuOverlay';

import {Container, NavDesktop} from './styles';
import {BoxContent} from './styles';
import {ContainerLogo} from './styles';
import {ContainerMenus} from './styles';
import {StyledEscamboLogo} from './styles';
import {NavLink} from './styles';
import {ButtonOrange} from './styles';
import Burguer from 'components/Burguer/Burguer.js';
import MenuMobile from 'components/MenuMobile/Menu';
import {
  Li,
  A,
  Line,
  LoginGroup,
  BotaoOverlay,
  Menu,
  IconeAnuncios,
  IconeBooks,
  IconeChat,
  IconeFavoritos,
  IconeCarteira,
  IconeUsuario,
  IconeSeta
  } from './styles';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {signOut} = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Container>
      <BoxContent>
        <ContainerLogo>
          <StyledEscamboLogo />
        </ContainerLogo>
        <Burguer open={open} setOpen={setOpen} />
        <ContainerMenus>
          <MenuMobile open={open} ></MenuMobile>
          <NavDesktop>
            <NavLink to='/announcements'><IconeAnuncios/>Anúncios</NavLink>
            <NavLink to='/livros'><IconeBooks/>Livros</NavLink>
            <NavLink to='/chats'><IconeChat/>Chats (em breve)</NavLink>
            <NavLink to='/favorites'><IconeFavoritos/>Favoritos</NavLink>
            
            {/*  <NavLink to='/carteira'><IconeCarteira/>Carteira</NavLink>
             */}
          </NavDesktop>
        </ContainerMenus>
        <LoginGroup>
          <ButtonOrange onClick={() => navigate('/create')}>Anunciar</ButtonOrange>
          
          <BotaoOverlay onClick={handleMenuToggle}>
            <IconeUsuario/>Login<IconeSeta/>
          </BotaoOverlay>

          <MenuOverlay isOpen={isMenuOpen} onClose={handleMenuToggle}>
            <Menu>
              <Li><A to='/profile'>Perfil</A></Li>
              <Li><A to='/MeusAnuncios'>Seus Anúncios</A></Li>
              <Line/>
              <Li><A to='/signin' onClick={() => signOut()}>Log out</A></Li>
            </Menu>
          </MenuOverlay>
        </LoginGroup>
      </BoxContent>
    </Container>
  );
};

export default Header;
