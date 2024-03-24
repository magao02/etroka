import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 10vw;
  background-color: #f2f2f2;
  margin-right: 1.75vw;
  align-self: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 2vh;
    height: 10vh;
    width: 80vw;
  }
`;