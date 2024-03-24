import styled from 'styled-components';

import {IoChevronBack} from 'react-icons/io5';
import {BiSearch} from 'react-icons/bi';

export const Container = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: #ffffff;
  border-bottom: 1px solid #B9B7B7;
  border-top: 1px solid #B9B7B7;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #B9B7B7;
  padding: 20px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  
  height: 5%;
  width: 95%;
  background-color: #E5E5E5;
  margin-top: 10px;
  
  border-radius: 30px;
  padding: 2% 3%;
  gap: 5px;
`;

export const SearchIcon = styled(BiSearch)`
  display: flex;
  align-items: center;

  color: #B9B7B7;
  font-size: 4vh;
`;

export const SearchInput = styled.input`
  display: flex;
  align-items: center;

  background-color: #E5E5E5;
  border: none;
  width: 95%;
  height: 5%;

  :focus-visible {
    outline: none;
  }
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 5vh;
  color: #4C0C6C;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 2.5vh;
  }
`;

export const ContainerReturnToPage = styled.div`
  padding-right: 2vw;
  padding-top: 0.5vh;

  @media (max-width: 768px) {
    padding-right: 1vw;
  }
`;

export const ReturnToPageIcon = styled(IoChevronBack)`
  color: #000;
  font-size: 4vh;

  @media (max-width: 768px) {
    align-items: right;
    font-size: 3.5vh;
  }

  @media (max-width: 600px) {
    align-items: center;
    font-size: 3vh;

  }
`;

export const ChatList = styled.div`
  height: 70%;
  overflow-y: auto;
`;
