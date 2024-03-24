import React from 'react';
import {StyledMenu, NavLink} from './style.js';
import {bool} from 'prop-types';
const MenuMobile = ({open}) => {
  return (
    <StyledMenu open={open}>
      <NavLink to='/announcements'>Anúncios</NavLink>
      <NavLink to='/chats'>Chats</NavLink>
      <NavLink to='/livros'>Livros</NavLink>
      <NavLink to='/profile'>Meu Perfil</NavLink>
      <NavLink to='/favorites'>Favoritos</NavLink>
      <NavLink to='/signin' onClick={() => signOut()} > Sair </NavLink>
    </StyledMenu>
  );
};
MenuMobile.propTypes = {
  open: bool.isRequired,
};
export default MenuMobile;
