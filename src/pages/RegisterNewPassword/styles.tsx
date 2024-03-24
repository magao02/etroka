import styled from 'styled-components';
import {IoChevronBack} from 'react-icons/io5';

export const Principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10%;
    height: 100vh;
  }
`;

export const Carousel = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerReturnToPage = styled.div`
  margin-top: 5vh;

  @media (max-width: 768px) {
    padding-right: 1vw;
  }

  @media (max-width: 600px) {
    padding-right: 1vw;
  }
`;

export const ReturnToPageIcon = styled(IoChevronBack)`
  color: #000;
  font-size: 5vh;

  @media (max-width: 768px) {
    align-items: right;
    font-size: 3.5vh;
    padding-right: 1.2vw;
  }

  @media (max-width: 600px) {
    align-items: center;
    font-size: 3.5vh;
    padding-right: 1.2vw;
  }
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
    width: auto;
    height: auto;
    padding: 0;
  }
`;

export const ContainerFields = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }

  @media (max-width: 1115px) {
    padding: 0;
    padding-top: 2vh;
    font-size: 2vh;
    height: auto;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-top: 2vh;
    font-size: 1.6vh;
    height: auto;
    justify-content: center;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 25vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;

export const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: bold;
  font-weight: bold;
  font-size: 8vh;
  color: #4E096B;
  height: 20%;
  padding-top: 15vh;
  white-space: pre-line;
  
  @media (max-width: 1115px) {
    padding: 0;
    font-size: 6vh;
    height: auto;
  }

  @media (max-width: 1350px) {
    padding-top: 5vh;
    font-size: 6vh;
    height: auto;
  }
`;

export const Description = styled.div`
  font-family: 'Noto Sans';
  font-style: semi-bold;
  font-weight: semi-bold;
  font-size: 2.5vh;
  color: #B9B7B7;
  height: 15%;
  text-align: left;
  padding-top: 20vh;
  padding-left: 5px;
  
  @media (max-width: 1350px) {
    padding: 0;
    padding-top: 2vh;
    font-size: 2vh;
    height: auto;
  }
`;

export const ContainerButton = styled.div`
  padding-top: 7vh;
  width: 100%;
  
  @media (max-width: 1115px) {
    padding: 0;
    padding-top: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-top: 2vh;
    height: auto;
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

  @media (max-width: 1115px) {
    padding: 0;
    padding-top: 2vh;
    height: auto;
  }
`;

export const Terms = styled.div`
  position: relative;
  padding-top: 7vh;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 2.2vh;
  line-height: 2vh;
  color: #727171;
  display: inline-block;
  span {
    display: inline;
  }

  a {
    margin-left: .3vw;
  }

  @media (max-width: 1115px) {
    padding-top: auto;
    font-size: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    font-size: 1.8vh;
    height: auto;
    padding-top: 7vh;
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

  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }

  span {
    color: #727171;
  }

  @media (max-width: 1115px) {
    font-size: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    font-size: 1.8vh;
    height: auto;
  }
`;
