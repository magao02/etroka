import React from 'react';
import useAuth from 'hooks/useAuth';
import {useNavigate} from 'react-router-dom';

import {Form} from '@unform/web';
import EmailInput from 'components/EmailInput';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import PasswordInput from 'components/PasswordInput';

import {Principal} from './styles';
import {ButtonLink} from './styles';
import {ContainerFields} from './styles';
import {ContainerLogo} from './styles';
import {ContainerLoginForm} from './styles';
import {ContainerButton} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {StyledEscamboLogo} from './styles';
import {InfoText} from './styles';
import {Redirect} from './styles';

import data from './data.json';
import useNotification from 'hooks/useNotification';

interface SignInProps {
  email: string,
  password: string,
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const {errorMessage} = useNotification();
  const {signIn, auth} = useAuth();


  const handleToSubmit = async (data: SignInProps) => {
    await signIn(data.email, data.password);
    if (localStorage) {
      console.log(auth);
      navigate('/announcements');
    } else {
      errorMessage('Email ou senha inválidos');
    }
  };


  return (
    <Principal>
      <ContainerLoginForm>
        <ContainerLogo>
          <StyledEscamboLogo/>
        </ContainerLogo>
        
        <Form onSubmit={handleToSubmit}>
          <ContainerFields>
            <EmailInput
              name="email"
              label="Email"
              type="text"
              placeholder={data.placeholders.email}
            />
            <PasswordInput
              name="password"
              label="Senha"
              type="password"
              placeholder={data.placeholders.password}
            />
            <ButtonLink to='/recover' >
              {data.forgotPassword}
            </ButtonLink>
            <ContainerButton>
              <Button
                type='submit'
              > {data.loginButton} </Button>
            </ContainerButton>
            <InfoText> {data.doesNotHaveAccount}
              <Redirect to='/signup' replace >
                {data.signUp}
              </Redirect>
            </InfoText>
          </ContainerFields>
        </Form>
      </ContainerLoginForm>
      <Carousel/>
    </Principal>
  );
};

export default SignIn;
