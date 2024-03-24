import React from 'react';
import {Form} from '@unform/web';

import PageContainer from 'components/PageContainer';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import InputForm from 'components/InputForm';
import Button from 'components/Button';

import {ContainerFields} from './styles';
import {ContainerLogo} from './styles';
import {LoginSection} from './styles';
import {ContainerDraw} from './styles';
import {ContainerLoginForm} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {StyledDrawSignUp} from './styles';
import {StyledEscamboLogo} from './styles';
import {ContainerButtons} from './styles';
import {InfoText} from './styles';

import data from './data.json';

const PasswordReset: React.FC = () => {
  const handleToSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <PageContainer>
      <JustifyContainer>
        <ContentBox>
          <LoginSection>
            <ContainerDraw>
              <Title> {data.title} </Title>
              <Description> {data.description} </Description>
              <StyledDrawSignUp />
            </ContainerDraw>
            <Form onSubmit={handleToSubmit}>
              <ContainerLoginForm>
                <ContainerLogo>
                  <StyledEscamboLogo />
                </ContainerLogo>
                <InfoText>
                  {data.instructions}
                </InfoText>
                <ContainerFields>
                  <InputForm
                    name="password"
                    label="Senha"
                    type='password'
                    placeholder='*******'
                  />
                  <InputForm
                    name='passwordConfirmation'
                    label='Confirmar senha'
                    type='password'
                    placeholder='*******'
                  />
                </ContainerFields>
                <ContainerButtons>
                  <Button type='submit' > Enviar </Button>
                </ContainerButtons>
              </ContainerLoginForm>
            </Form>
          </LoginSection>
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default PasswordReset;
