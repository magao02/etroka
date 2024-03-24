import styled from 'styled-components';

export const StyledButton = styled.button`
  /* size */
  width: 100%;
  height: 9vh;

  /* borders */
  border: none;
  box-sizing: border-box;
  border-radius: 10px;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  background-color: #4e096b;

  /* display */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: none;

  font-family: 'Noto Sans', sans-serif;
  font-size: 2.3vh;
  line-height: 2vh;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;


  :hover {
    opacity: 0.8;
  }

  transition: 0.3s;
   @media (max-width: 768px) {
    font-size: 1.5vh;
  line-height: 1.5vh;
  }

  @media (max-width: 768px) {
    align-self: center;
    font-size: 1.8vh;
    height: 6.5vh;
  }

  @media (max-width: 600px) {
    align-self: center;
    font-size: 1.8vh;
    height: 6.5vh;
  }
`;

export const ContainerGrid = styled.div`
  margin: .1vh 0vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  svg {
    margin-left: .5vw;
    margin-right: .5vw;
  }
`;
