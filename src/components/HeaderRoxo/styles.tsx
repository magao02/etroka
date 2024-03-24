import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 52vh;

  /* spacing */
  margin: 0;
  justify-content: space-between;
  text-align: center;

  /* colors */
  background-color: #4C0C6C;
  padding-top: 20vh;
  padding-bottom: 28vh;

  @media (max-width: 768px) {
    font-size: 4vh;
    margin-bottom: 3vh;
  }
`;

export const BoxContent = styled.div`
  width: 60vw;
  height: 7vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 10vh;
`;

export const ContentBox = styled.div`
  /* size */
  bottom: 0;
  width: 80vw;
  padding-bottom: 8vh;



  @media (max-width: 2500px) {
    width: 60vw;
  }

  @media (max-width: 2200px) {
    width: 75vw;
  }

  @media (max-width: 1600px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Logo = styled.img`
  width: 15vh;
  height: 15vh;
  border-radius: 15vh;
  padding: 5vh;
  display: flex;
  background-color: #ffffff;
  position: relative;
  margin: auto;
  margin-top: 22vh;
`;
