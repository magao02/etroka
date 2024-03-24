import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`;

export const Carousel = styled.div`
  height: 100vh;
`;

export const ContainerLoginForm = styled.div`
  width: 50%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0vh 14vh 14vh 14vh;
  
  @media (max-width: 1115px) {
    width: 100%;
    height: 100vh;
    
  }
`;

export const ContainerFields = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 40vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 5vh;
  padding-bottom: 5vh;

   @media (max-width: 1115px) {
    display: flex;
    align-items: center;
    margin-left: 10vw;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    margin-left: 10vw;
  }
`;

export const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 8vh;
  color: #4E096B;
  text-align: left;

  @media (max-width: 1115px) {
    align-self: left;
    width: 100vw;
    font-size: 6vh;
  }

  @media (max-width: 600px) {
    align-self: left;
    width: 100vw;
    font-size: 4vh;
  }
`;

export const Description = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 2.4vh;
  padding-left: 0.3vw;
  color: #B9B7B7;
  text-align: left;
  
  @media (max-width: 1115px) {
    align-self: left;
    width: 99vw;
    font-size: 2vh;
  }

  @media (max-width: 600px) {
    align-self: left;
    width: 98vw;
    font-size: 1.8vh;
  }
`;

export const Message = styled.p`
  color: #4E096B;
  font-size: 2vh;
  margin-bottom: 0;
  text-align: left;
  align-self: flex-start;

  @media (max-width: 1115px) {
    align-self: flex-start;
    width: 80vw;
    font-size: 1.8vh;
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 80vw;
    font-size: 1.4vh;
  }
`;

export const Linked = styled.a`
  color: #4E096B;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0.5em;
  font-weight: bold;
  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }
`;

export const ContainerButton = styled.div`
  padding-top: 7vh;
  width: 100%;

  @media (max-width: 1115px) {
    width: 80vw;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const InfoText = styled.div`
  position: relative;
  top: -10px;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 2vh;
  line-height: 2vh;
  color: #727171;
  display: inline;

  a {
    margin-left: .3vw;
  }
`;

export const Redirect = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4vh;
  line-height: 2vh;
  color: #4C0C6C;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }
`;

export const Terms = styled.div`
  position: relative;
  padding-top: 2vh;
  padding-bottom: 2vh;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 2.2vh;
  line-height: 2vh;
  color: #727171;
  display: inline-block;

  @media (max-width: 1115px) {
    text-align: center;
    width: 90vw;
    font-size: 1.8vh;
  }

  @media (max-width: 600px) {
    text-align: center;
    width: 90vw;
    font-size: 1.4vh;
  }

  span {
    display: inline;
  }

  a {
    margin-left: .3vw;
  }
`;

export const PrivacyPolicy = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 2.2vh;
  line-height: 2vh;
  text-decoration: none;
  color: #4C0C6C;
  cursor: pointer;

  @media (max-width: 1115px) {
    align-self: center;
    width: 80vw;
    font-size: 1.8vh;
  }

  @media (max-width: 600px) {
    align-self: center;
    width: 80vw;
    font-size: 1.4vh;
  }

  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }

  span {
    color: #727171;
  }
`;

/* * {
  box-sizing: border-box;
}

.conteiner {
  display: flex;
}

.divForm {
  width: 45vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.divForm * {
  margin: auto;
}

a {
  text-decoration: none;
}

main {
  width: 69%;
  margin-bottom: 2em;
}

footer {
  max-width: 90%;
  margin: auto;
} */
