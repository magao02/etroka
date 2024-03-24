import styled from 'styled-components';
import {FaRegEye} from 'react-icons/fa';

interface Props {
  error: boolean;
}

export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #F2F2F2;
  border-radius: 10px;
  padding: 3px;
  border: 0.35px solid #d3d3d3;
  outline: none;

  ${(props) => props.error && `
    border-color: #ff6961;
  `}

  @media (max-width: 768px) {
    width: 80vw;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 8vh;
  padding-left: 1.6vh;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.3vh;
  line-height: 2vh;
  background-color: #F2F2F2;
  color: #727171;
  border: #727171;
  outline: none;
  caret-color: #9400c2;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: inherit;
  }

  margin-top: auto;
  margin-bottom: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 6vh;
    padding-right: 6vh;
    padding-left: 1vh;
    font-size: 1.8vh;
    line-height: 1.8vh;
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2vh;
  padding-top: 1vh;
  line-height: 2vh;
  color: #a83a3a;
  padding-left: 5px;

  @media (max-width: 768px) {
    /* Ajuste as propriedades de fonte e de preenchimento para dispositivos com largura máxima de 768 pixels */
    font-size: 1.8vh;
    line-height: 1.8vh;
    padding-top: 0.8vh;
    padding-left: 3px;
  }
`;

export const Icon = styled(FaRegEye)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #B9B7B7;
  font-size: 5vh;
  cursor: pointer;

  @media (max-width: 768px) {
    align-items: right;
    font-size: 3.5vh;
  }

  @media (max-width: 600px) {
    align-items: center;
    font-size: 3.5vh;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`;
