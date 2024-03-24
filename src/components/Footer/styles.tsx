import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 58vh;
  background-color: #4C0C6C;
  position: relative;
  align-items: center;

  /* colors */
  padding-top: 5vh;
  padding-bottom: 5vh;
  @media (max-width: 728px) {
    height: auto;
    justify-content: space-between;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75%;
  justify-content: center;
  align-items: center;
  @media (max-width: 728px) {
    display: block;
    width: auto;
    height: auto;
    align-self: center;
  }
`;

export const ContainerBoxContact = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
  @media (max-width: 728px) {
    display: block;
    width: auto;
    height: auto;
    align-self: center;
  }
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 70%;
  gap: 15%;
  margin-left: 5vw;
  margin-right: 5vw;
  @media (max-width: 728px) {
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    margin: 5%;
  }
`;

export const LogoBoxColumn = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  margin-left: 3vw;
  margin-right: 5vw;
  @media (max-width: 728px) {
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
  }
`;

export const SocialBoxColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 15%;
  height: auto;
  margin-right: 5vw;
  gap: 5%;
  @media (max-width: 728px) {
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
  }
`;

export const BoxColumnContact = styled.div`
  display: flex;
  width: auto;
  margin-left: 2vw;
  margin-right: 2vw;
  @media (max-width: 728px) {
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
  }
`;

export const Title = styled.div`
  color: #ffffff;
  font-family: 'Noto Sans';
  font-weight: bold;
  font-size: 1vw;
  @media (max-width: 728px) {
    font-size: large;
  }
`;

export const TitleContact = styled.div`
  color: #ffffff;
  font-family: 'Noto Sans';
  font-style: bold;
  font-weight: 500;
  font-size: 1vw;
  @media (max-width: 728px) {
    font-size: large;
  }
`;

export const NavLink = styled(Link)`
  font-style: normal;
  font-weight: 100;
  font-size: 1vw;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: rgba(255, 255, 255, 0.75);
  text-align: left;

  text-decoration: none;
  text-transform: none;

  &:hover {
    transition: ease-in .1s;
  }
  @media (max-width: 728px) {
    font-size: large;
    margin: 1%;
  }
`;

export const Hr = styled.hr`
  width: 75%;
  border-top: none;
  border-right: none;
  border-left: none;
  color: rgba(255, 255, 255, 0.25);
`;

export const Logo = styled.img`
  height: auto;
  width: 13vw;
  @media (max-width: 728px) {
    width: 50%;
  }
`;

export const Social = styled.a`
  display: flex;
  align-items: center;
  @media (max-width: 728px) {
    justify-content: center;
  }
`;

export const Icon = styled.img`
  display: flex;
  height: auto;
  width: 2vw;
  @media (max-width: 728px) {
    width: 80%;
  }
`;
