import styled from 'styled-components';
import {MdFavoriteBorder as FavIcon} from 'react-icons/md';
import {MdOutlinePlace as LocalizationIcon} from 'react-icons/all';

export const Paper = styled.div`
  width: 80vw;
  height: 83vh;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0rem .2rem .2vw rgba(75, 75, 75, 0.12);
  border-radius: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5vh;
  align-items: center;

  border-bottom: 2px solid #CCCCCC;
  border-left: 1px solid #CCCCCC;
  border-right: 1px solid #CCCCCC;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding-top: 5vw;
    width: 100%;
  }
`;

export const AdvertType = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 5.2vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #4C0C6C;
  padding: 1vh 0vw;
`;

export const ContainerLeft = styled.div`
  width: 55vw;
  box-sizing: border-box;
  align-self: center;
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export const LineVertical = styled.hr`
  height: 90%;
  border-top: none;
  border-right: none;
  border-bottom: none;
  color: #B9B7B7;
  
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerRight = styled.div`
  width: 45vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-self: center;

  button {
    height: 4vh;
    width: 18vh;
  }

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 2vw;

  @media (max-width: 800px) {
    padding-left: 6vw;
  }
`;

export const LocalIcon = styled(LocalizationIcon)`
  margin-right: 5px;
  font-size: 2.5vh;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;


export const Section = styled.div`
  display: block;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2vh;
  }

`;

export const ImageSection = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;

  img {
    min-height: 70vh;
    max-height: 70vh;
    width: 90%;
    
    background-size: cover;
    object-fit: cover;
    
    border-radius: 1vw;

    box-sizing: border-box;
  }
 
  @media (max-width: 800px) {
    img {
      min-height: auto;
      max-height: auto;
    }
  }
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.6vh;
  line-height: 3vh;
  padding-top: 2.9vh;
  color: #4C0C6C;
  margin: 1vh 0vh;
`;


export const DataSection = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 2.4vh;
  line-height: 2vh;
  color: #666666;
  margin: 1vh 0vh;
`;

export const DataSectionTitle = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 2.6em;
  color: #4C0C6C;
  margin: 1vh 0vh;
`;

export const DataSectionLocalization = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: lighter;
  display: flex;
  align-items: center;
  font-size: 2vh;
  line-height: 1vh;
  color: #727171;
  margin: 1vh 0vh;
`;

export const ContainerButtons = styled.div`
  width: 32vw;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: auto;
  padding-top: 4vh;
  
   button {
    height: 11vh;
    width: 100%;
    margin: 0 auto;
    border-radius: 50px;
    margin: 2vh 0vw 1vh 0vw;
  }

  @media (max-width: 800px) {
    width: 80%;
    flex-direction: column;
    padding-top: 4vh;
  }
`;

export const ContainerNormalButton = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1vw;
  width: 100%;
`;

export const ContainerGhostButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const SuccessMessage = styled.p`
  color: green;
  position: absolute;
  top: 10vh; /* Defina o valor adequado de acordo com a necessidade */
  width: 100%;
  text-align: center;
`;


export const MdFavoriteBorder = styled(FavIcon)`
  fill: #4C0C6C;
  font-size: 20px;
`;
