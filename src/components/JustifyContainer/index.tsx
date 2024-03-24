import React from 'react';
import {Container} from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  thereIsHeader?: boolean
}

const ContentBox: React.FC<Props> = ({children, thereIsHeader}) => {
  return <Container header={thereIsHeader}> {children} </Container>;
};

export default ContentBox;
