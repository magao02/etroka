import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as EscamboLogo} from 'assets/img/logoHorizontal.svg';

import {ReactComponent as Annoucement} from 'assets/icons/AnnoucementsIcon.svg';
import {ReactComponent as Chat} from 'assets/icons/ChatIcon.svg';
import {ReactComponent as Favorite} from 'assets/icons/FavoriteIcon.svg';
import {ReactComponent as Wallet} from 'assets/icons/WalletIcon.svg';
import {ReactComponent as User} from 'assets/icons/UserIcon.svg';
import {ReactComponent as Arrow} from 'assets/icons/ArrowIcon.svg';
import {RiBook2Line as Books} from 'react-icons/all';
import React from 'react';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 5vh;

  /* Espaçamento */
  margin: 0;

  /* Cores */
  background-color: #ffffff;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

export const StyledEscamboLogo = styled(EscamboLogo)`
  height: 20vh;
  width: 60%;
`;


export const BoxContent = styled.div`
  width: 95vw;
  height: 5vh;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  width: 15vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 3.5vh;
  line-height: 2.5vh;
  letter-spacing: 0.16px;
  color: #4c0c6c;


  svg {
    margin: 1vh;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;

export const ContainerMenus = styled.div`
  width: 50vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  nav {
    margin-right: 5vw;
  }

  button {
    width: 5vw;
    height: 2vh;
  }
  @media (max-width: 768px) {
    button {
      width: 20vw;
    }
  }
`;

export const NavDesktop = styled.nav`
display: flex;
justify-content: space-between;

width: 80vw;

@media (max-width: 768px) {
  display: none;
}
`;

export const NavMobile = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;
    height: 100vh;
    width: 100vw;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

  }
`;

export const A = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 2vh;
  line-height: 3vh;

  display: flex;
  text-justify: center;
  
  color: #000000;
`;

export const NavLink = styled(Link)`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 2vh;
  line-height: 3vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #4C0C6C;

  align-items: center;

  text-decoration: none;
  text-transform: none;

  &:not(:first-child) {
    margin-left: 1vw;
  }

  &:hover {
    opacity: 0.8;
    transition: ease-in .1s;
  }

  @media (max-width: 426px) {
    font-size: 5vh;
    line-height: 5vh;
    text-align: left;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const ButtonOrange = styled.button`
  height: 5vh;

  /* borders */
  border: none;
  border-radius: 3vw;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  /* display */
  background-color: #fc8404;
  font-family: 'Noto Sans', sans-serif;
  font-size: 2.3vh;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;

  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 2vw;
  padding-right: 2vw;

  :active {
    border: none;
  }

  :hover {
    opacity: 0.8;
    border: none;
  }

  transition: 0.3s;
  @media (max-width: 768px) {
    height: 3.5vh;
    font-size: 1.6vh;
    border-radius: 3vw;
    display: flex;
    align-items: center;
    margin-right: 3vw;
  }
`;

export const IconeAnuncios = styled(Annoucement)`
  height: 3vh;
  width: auto;
  padding-right: 0.5em;
`;

export const IconeBooks = styled(Books)`
height: 3.5vh;
width: auto;
padding-right: 0.5em;
`;

export const IconeChat = styled(Chat)`
  height: 3vh;
  width: auto;
  padding-right: 0.5em;
`;

export const IconeFavoritos = styled(Favorite)`
  height: 3vh;
  width: auto;
  padding-right: 0.5em;
`;

export const IconeCarteira = styled(Wallet)`
  height: 3vh;
  width: auto;
  padding-right: 0.5em;
`;

export const IconeUsuario = styled(User)`
  height: 3vh;
  width: auto;
  padding-right: 0.5em;
`;

export const IconeSeta = styled(Arrow)`
  height: 2vh;
  width: auto;
  padding-top: 0.2em;
  padding-left: 0.3em;
`;

export const Li = styled.li`
  display: block;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: calc(15 / 1440)vw;
  line-height: 20px;
`;

export const Line = styled.div`
  border: 1px solid black;
  width: 177px;
`;

export const BotaoOverlay = styled.button`
  display: flex;
  margin-left: 1vw;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 550;
  font-size: 2vh;
  line-height: 3vh;

  :hover {
    opacity: 0.8;
    border: none;
    cursor: pointer;
  }

  background-color: #ffffff;
  border: none;

  @media (max-width: 768px) {
    font-size: 1.8vh;
    display: flex;
  }
`;

export const Menu = styled.div`
  list-style: none;

  padding: 2vw;
  padding-top: 1vw;
  border: solid;

  position: absolute;
  z-index: 1;
  top: 9vh;
  right: 2.5vw;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border: solid black 1px;
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: white;
`;

export const LoginGroup = styled.div`
  min-width: 16vw;

  display: flex;

  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
  }
`;
