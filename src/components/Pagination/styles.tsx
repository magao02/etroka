import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

	border-top: 1px solid #4C0C6C;
  height: 5vh;

	margin: 5vh 18vw 5vw 18vw;	

	padding-top: 1vw;
  padding-bottom: 1vw;
`;

export const Prev = styled.button`
  display: flex;
  border: none;
  background-color: white;
  gap: 4px;
  :hover{
    cursor: pointer;
  }
`;

export const Span = styled.span`
  display: flex;
  color: black;
  font-size: large;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Next = styled.button`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: larger;
  gap: 4px;
  :hover{
    cursor: pointer;
  }
`;

export const ListOfPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Pages = styled.div`
  color: #4C0C6C;
  :active {
    opacity: 1.0;
  }
  :disabled {
    opacity: 0.5;
  }

`;

export const Page = styled.button`
	border: none;
	margin: 0.5vw;
	background-color: white;
	color: #4C0C6C;
  font-size: large;

	:hover {
		cursor: pointer;
	}
`;
