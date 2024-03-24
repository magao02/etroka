import styled from 'styled-components';

export const StyledButton = styled.button`
  /* size */
  width: 100%;
  height: 9vh;

  /* spacing */
  padding: 30px;

  /* borders */
  border: solid 2px #4C0C6C;
  box-sizing: border-box;
  border-radius: 15px;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  background-color: #FBFBFB;

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
  color: #4C0C6C;


  :hover {
    opacity: 0.8;
  }

  transition: 0.3s;
   @media (max-width: 768px) {
    font-size: 1.5vh;
  line-height: 1.5vh;
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
