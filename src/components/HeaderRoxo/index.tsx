import React from 'react';

import {Container} from './styles';
import {BoxContent} from './styles';
import {ContentBox} from './styles';
import logo from 'assets/img/Logo - Simbolo.png';
import {Logo} from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Header: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <BoxContent>
        <ContentBox>
          {children}
          <Logo src={logo}/>
        </ContentBox>
      </BoxContent>
    </Container>
  );
};

export default Header;
