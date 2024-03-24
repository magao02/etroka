import styled from 'styled-components';
import {ReactComponent as DrawSignUp} from 'assets/img/DrawSignup.svg';
import {ReactComponent as EscamboLogo} from 'assets/img/TESTE.svg';

export const ContainerDraw = styled.div`
  width: 36vw;
  min-height: 60vh;
  padding: 10vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


export const ContainerLoginForm = styled.div`
  width: 24vw;
  height: 60vh;
  padding: 10vh;
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  box-sizing: border-box;
  box-shadow: 0vh .4vh .6vh rgba(106, 106, 106, 0.12);
  border-radius: .5vh;
  padding: 3vh 4vh;

  @media (max-width: 426px) {
    width: 100%;
  }
`;


export const LoginSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;

  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`;

export const StyledDrawSignUp = styled(DrawSignUp)`
  height: 35vh;
`;

export const StyledEscamboLogo = styled(EscamboLogo)`
  width: 25%;
  height: 25%;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 2vh 0vh;
  justify-content: center;
  align-items: center;
`;

export const ContainerFields = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }

`;

export const Title = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5vh;
  line-height: 3vh;
  color: #0D4A99;
  height: 20%;
  margin-top: 2vh;
`;

export const Description = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vh;
  line-height: 2vh;
  color: #A8A8A8;
  width: 70%;
  text-align: center;
  padding: 5vh 2vw;
  box-sizing: border-box;
`;


export const ContainerButtons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2vw 3vw;

  button {
    &:not(:first-child) {
      margin-top: 1vh;
    }
  }
`;

export const InfoText = styled.div`
  margin: 2vh .5vw;
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2vh;
  color: #000000;
  text-align: center;
  display: flex;
`;
