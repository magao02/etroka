import styled from 'styled-components';

export const Moldura = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 55vw;
    min-height: 100vh;
    margin: auto;
    background-color: #4E096B;
    border-radius: 5vw 0 0 5vw;

    text-align: center;
     @media (max-width: 1115px) {
        display: none;
  }
`;

export const Imagem = styled.img`
    max-width: 60%;
`;

export const Titulo = styled.h1`
    width: 9.9em;
    margin: 0;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;

    color: #ffffff;
`;

export const Descricao = styled.p`
    width: 18.72em;
    margin-top: 1em;

    color: #ffffff;
`;
