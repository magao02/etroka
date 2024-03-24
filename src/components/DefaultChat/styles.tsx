import styled from 'styled-components';
import { BsFillChatRightDotsFill } from 'react-icons/bs';

export const Container = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #B9B7B7;
  border: 1px solid #B9B7B7;
`;

export const IconChat = styled(BsFillChatRightDotsFill)`
  color: #B9B7B7;
  font-size: 20vh;
  @media (max-width: 600px) {
    font-size: 25vh;
  }
`; 
