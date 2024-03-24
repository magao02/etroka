import styled from 'styled-components';
import {BiCheckCircle} from 'react-icons/bi';

export const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo escura para escurecer a tela */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Acima de qualquer elemento */
`;

export const ContainerPopUp = styled.div`
  width: 830px;
  height: 562px;
  border-radius: 50px;
  border: 10px solid #4C0C6C;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1115px) {
    width: 80vw;
    height: 60vh;
  }
`;

export const ContainerIconPopUp = styled.div`
  width: 50%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  @media (max-width: 1115px) {
    height: 25%;
  }
`;

export const IconPopUp = styled(BiCheckCircle)`
  color: #23AC01;
  font-size: 22vh;
  display: flex;
  padding-top: 5vh;

  @media (max-width: 1115px) {
    font-size: 10vh;
  }
`;

export const ContainerTitlePopUp = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TitlePopUp = styled.div`
  font-family: 'Noto Sans';
  text-align: center;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #000;

  @media (max-width: 1115px) {
    font-size: 25px;
  }
`;

export const ContainerSubtitlePopUp = styled.div`
  width: 60%;
  height: 10%;
  margin-top: -5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const SubtitlePopUp = styled.div`
  font-family: 'Noto Sans';
  font-size: 20px;
  text-align: center;
  justify-content: center;
  color: #727171;

  @media (max-width: 1115px) {
    font-size: 16px;
    margin-top: 7vh;
  }
`;

export const ContainerButtonPopUp = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  align-self: center;
`;