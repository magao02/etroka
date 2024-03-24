import React from 'react';
import {Container} from './styles';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const PageContainer: React.FC<Props> = ({children}) => {
  return <Container> {children} </Container>;
};

export default PageContainer;
