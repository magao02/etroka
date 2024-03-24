import styled, {css} from 'styled-components';
import {BiImageAdd as addImage} from 'react-icons/bi';
import {BiImageAlt as noImage} from 'react-icons/bi';


interface Props {
  avatar?: string
  disableEditMode?: boolean
  gridRow?: string,
  gridCol?: string
  error?: string
}

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div<Props>`

  grid-column: ${({gridCol}) => gridCol};
  grid-row: ${({gridRow}) => gridRow};

  height: 100%;
  width: 100%;
  background-color: #F2F2F2;
  border-radius: 8px;
  border: none;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;

  svg {
    font-size: 3.5vh;
    fill: #ffffff;
    margin-left: auto;
    margin-right: auto;
  }



  ${(props) =>
    !props.disableEditMode &&
    css`
      :hover {
        opacity: .5;
        transition: ease-in 0.2s;
        cursor: pointer;
      }
    `}

  background: url(${(props) => props.avatar});
  background-size: cover;

`;


export const InputImage = styled.input`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
`;


export const BiImageAdd = styled(addImage)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
`;


export const BiImageAlt = styled(noImage)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
`;
