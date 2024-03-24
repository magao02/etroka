import styled from 'styled-components';
import {BiImageAlt as noImage} from 'react-icons/bi';


export const Paper = styled.div`
  display: flex;
  justify-content: center;
  
  width: 20.78vw;
  min-height: 19vh;
  box-sizing: border-box;
  background: #FFFFFF;
  
  padding: 1%;
  border: 1.5px solid #B9B7B7;
  border-radius: 8px;

  /* Telas pequenas e laptops */
  @media (max-width: 1024px) {
    width: 23vw;
  }

  /* IPads e tablets */
  @media (max-width: 768px) {
    width: 29vw;
  }
  
  /* Dispositivos Mobile */
  @media (max-width: 480px) {
    padding: 3%;
    width: 85vw;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 100vw;
  box-sizing: border-box;
  
  gap: 1%;
`;


export const Picture = styled.img`
  display: flex;

  background-size: cover;
  object-fit: cover;
  
  width: 100%;
  height: 269px;
  background-color: #F2F2F2;
  border-radius: 4px;

  box-sizing: border-box;
  cursor: pointer;
`;


export const Title = styled.div`
  margin-top: 1vh;
  cursor: pointer;
  font-family: 'Noto Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  color: #4C0C6C;
`;

export const Localization = styled.div`
  margin-top: 1vh;
  align-self: start;
  justify-self: start;

  font-family: 'Noto Sans', sans-serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8em;
  line-height: 2vh;
  color: #C6C6C6;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 2.5vh;
  }
`;


export const Description = styled.p`
  margin-top: 1vh;
  font-family: 'Noto Sans', sans-serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8em;
  line-height: 2vh;
  color: #727171;
  height: 4vh;

  max-width: 60ch;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const CardActions = styled.div`
  margin-top: 2vh;
  justify-self: start;
  align-self: center;
  display: flex;
  flex-direction: row;

  button {
    width: 20vw;
  }

  @media (max-width: 426px) {
    button {
      width: 25vw;
    }
  }
`;

export const BiImageAlt = styled(noImage)`
  font-size: 32px;
  fill: #A5A5A5;
`;
