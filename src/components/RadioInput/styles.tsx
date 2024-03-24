import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
`;

export const OptionLabel = styled.label<{active: boolean}>(
  ({active}) => `
    color: ${active ? '#FC8404' : 'black'};
    font-size: 3.25vh;
    margin-left: 1.25vw;
    margin-right: 1.25vw;
    font-weight: bold;
  `,
);

export const Switch = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
`;

export const Slider = styled.label<{active: boolean}>(
  ({active}) => `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${active ? '#D9D9D9' : '#D9D9D9'};
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  `,
);

export const Thumb = styled.span<{active: boolean}>(
  ({active}) => `
    position: absolute;
    top: 2px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    margin-left: 2px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease-in-out;
    transform: translateX(${active ? '24px' : '0'});
  `,
);
