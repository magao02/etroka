import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 30vh 6vh;
  grid-template-columns: 6vh 6vh 6vh 6vh 6vh;
  grid-gap: .5vh;
`;

interface Props {
  picture?: string,
  disableEditMode?: boolean
}

export const MinimizedPicture = styled.div<Props>`

  height: 100%;
  width: 100%;
  background-color: ${(props) => props.disableEditMode ?
    'transparent' : '#F2F2F2'};
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3.5vh;
    fill: #ffffff;
    margin-left: auto;
    margin-right: auto;
  }

  :hover {
    opacity: .5;
    transition: ease-in 0.2s;
    cursor: pointer;
  }

  ${(props) =>
    props.picture &&
    css`
      background: url(${props.picture});
      background-size: cover;
    `}


`;

