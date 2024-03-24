import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  box-sizing: border-box;
  border-radius: 1vh;
  background-color: #4e096b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: none;
  font-family: 'Noto Sans', sans-serif;
  font-size: 2.3vh;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;
  :hover {
    transition-duration: 0.5s;
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const ContainerGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
