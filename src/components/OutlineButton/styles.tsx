import styled from 'styled-components';

export const StyledButton = styled.button`
  /* size */
  width: 100%;
  height: 100%;

  min-height: 3.5vh;

  /* spacing */
  padding-left: .2vh;

  /* borders */
  border: 1px solid #555555;
  box-sizing: border-box;
  border-radius: 8px;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  background-color: inherit;

  /* display */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  font-family: 'Noto Sans', sans-serif;
  font-size: 1.1vh;
  line-height: 3vh;
  font-style: normal;
  font-weight: 400;
  color: #555555;

  :hover {
    opacity: 0.5;
  }

  transition: 0.3s;

`;


export const ContainerGrid = styled.div`
  margin: .1vh 0vh;
  width: auto;
  min-width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-left: .5vw;
    margin-right: .5vw;
  }
`;
