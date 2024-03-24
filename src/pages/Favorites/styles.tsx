import styled from 'styled-components';
import {IoChevronBack} from 'react-icons/io5';
import { AiOutlineDown } from 'react-icons/ai';

export const TitleArea = styled.div`
  width: 40vw;
  height: auto;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5vw;
  padding-top: 15vh;

  @media (max-width: 768px) {
    width: 80vw;
    height: 8vh;
    flex-direction: column;
  }
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 7vh;
  margin-top: 5vh;
  color: #4C0C6C;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 4vh;
    margin-top: 0%;
  }
`;

export const ContainerReturnToPage = styled.div`
  padding-right: 2vw;
  padding-top: 0.5vh;

  @media (max-width: 768px) {
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
    padding-right: 2vw;
  }
`;

export const ListOfCards = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 65.35vw;

  gap: 1.5vw;

  /* Telas pequenas e laptops */
  @media (max-width: 1024px) {
    width: 72vw;
  }
  
  /* IPads e tablets */
  @media (max-width: 768px) {
    width: 90vw;
  }
  
  /* Dispositivos Mobile */
  @media (max-width: 480px) {
    width: 85vw;
  }
`;


export const BotaoOverlay = styled.button`
  display: flex;

  position: relative;
  margin-left: auto;

  align-items: center;
  align-content: center;
  gap: 10px;
  justify-self: right;
  font-size: 3vh;
  line-height: 3vh;

  margin-top: 3%;
  margin-bottom: 3%;

  :hover {
    opacity: 0.8;
    border: none;
    cursor: pointer;
  }

  background-color: #ffffff;
  border: none;
`;

export const OrdenarOverlay = styled.div`
  display: block;
  width: 100%;
`;

export const OutlineDownIcon = styled(AiOutlineDown)`
  color: #000;
  font-size: 2vh;

  @media (max-width: 768px) {
    align-items: right;
    font-size: 3.5vh;
    padding-right: 1.2vw;
  }

  @media (max-width: 600px) {
    align-items: center;
    font-size: 3.5vh;
    padding-right: 2vw;
  }
`;