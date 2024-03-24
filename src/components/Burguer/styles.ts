import styled from 'styled-components';
export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3px;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #4e096b;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: 768px) {
    display: none;
  }

  
`;
