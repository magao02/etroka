import styled from 'styled-components';
import {BiImageAlt as noImage} from 'react-icons/bi';


export const Container = styled.div`
  display: flex;
  height: auto;
  width: 96%;
  padding: 2%;
  border-bottom: 1px solid #B9B7B7;
  cursor: pointer;
  gap: 2%;
`;

export const UserProfile = styled.img`
  background-color: black;
  min-width: 44px;
  min-height: 44px;
  border-radius: 100%;
`;

export const ChatInfo = styled.div`
  flex-grow: 1;
  min-width: 40%;
`;

export const Name = styled.div`
  font-weight: 400;
  margin-bottom: 5px;
`;

export const LastMessage = styled.div`
  font-size: 12px;
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
`;

export const ChatStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  min-width: 20%;
  max-width: 30%;
  justify-content: space-between;
`;

export const LastMessageTime = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: #888888;
`;

export const Status = styled.div`
  font-size: 10px;
  color: white;
  padding: 5px;
  background-color: #4C0C6C;
  border-radius: 30px;
  text-align: center;
`;
