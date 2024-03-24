import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height: 60vh;
  background-color: #D9D9D9;
  cursor: pointer;
  border-radius: 7px;
  @media (max-width: 800px) {
    width: 40vw;
    height: 19vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
`;

export const CameraIcon = styled.img`
  width: 50%;
  height: 50%;
`;

export const HiddenInput = styled.input`
  display: none;
`;
