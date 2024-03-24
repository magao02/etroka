import React from 'react';
import {Container} from 'components/ContentBox/styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const ContentBox: React.FC<Props> = ({children}) => {
  return <Container> {children} </Container>;
};

export default ContentBox;
