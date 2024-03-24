import React from 'react';

import {Container, Hr, ContainerBox, ContainerBoxContact, BoxColumn, LogoBoxColumn, SocialBoxColumn, BoxColumnContact} from './styles';
import {Title, TitleContact, NavLink, Logo, Social, Icon} from './styles';
import logo from 'assets/img/Logomarca - Branca.png';
import twitter from 'assets/img/twitter.png';
import linkedin from 'assets/img/linkedin.png';
import facebook from 'assets/img/facebook.png';

const Footer = () => {
  return (
    <Container>
      <ContainerBox>
        <LogoBoxColumn>
          <Logo
              src={logo}
            />
        </LogoBoxColumn>
        <BoxColumn>
          <Title>Empresa</Title>
          <NavLink to=''>Sobre nós</NavLink>
          <NavLink to=''>Trabalhe conosco</NavLink>
          <NavLink to=''>Políticas</NavLink>
        </BoxColumn>
        <BoxColumn>
          <Title>Categorias</Title>
          <NavLink to='/favorites'>Favoritos</NavLink>
          <NavLink to='/profile'>Minha Conta</NavLink>
        </BoxColumn>
        <SocialBoxColumn>
          <Social
            href={'https://twitter.com/'}
            >
            <Icon
              src={twitter}
            />
          </Social>

          <Social
            href={'https://linkedin.com/'}
            >
            <Icon
              src={linkedin}
            />
          </Social>

          <Social
            href={'https://facebook.com/'}
            >
            <Icon
              src={facebook}
            />
          </Social>
        </SocialBoxColumn>
      </ContainerBox>
      <Hr/>
      <ContainerBoxContact>
        <BoxColumnContact>
          <TitleContact>{'© 2023 E-troka. All Rights Reserved. '}</TitleContact>
        </BoxColumnContact>
        <BoxColumnContact>
          <NavLink to=''>Política de Privacidade</NavLink> <br />
        </BoxColumnContact>
        <BoxColumnContact>
          <NavLink to=''>Termos e Condições</NavLink> <br />
        </BoxColumnContact>
        <BoxColumnContact>
          <NavLink to=''>Código de Conduta</NavLink> <br />
        </BoxColumnContact>
      </ContainerBoxContact>
    </Container>
  );
};

export default Footer;
