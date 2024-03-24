import {Form} from '@unform/web';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import InputForm from 'components/InputForm';
import Button from 'components/Button';
import Carousel from 'components/Carousel';

import {Principal} from './styles';
import {ContainerFields} from './styles';
import {ContainerTitle} from './styles';
import {ContainerLoginForm} from './styles';
import {ContainerButton} from './styles';
import {ContainerReturnToPage} from './styles';
import { ReturnToPageIcon } from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {Terms} from './styles';
import {PrivacyPolicy} from './styles';

import data from './data.json';
import PopUp from 'components/PopUp';
import PasswordInput from 'components/PasswordInput';

const RegisterNewPassword: React.FC = () => {

  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpSubtitle, setPopUpSubtitle] = useState('');
  const message = 'Nova senha cadastrada!';
  const subtitle = '';

  const handleToSubmit = (data: object) => {
    const message = 'Nova senha cadastrada!';
    const subtitle = '';
    setPopUpMessage(message);
    setPopUpSubtitle(subtitle);
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };
  
  return (
    <Principal>
      <ContainerLoginForm>
        <ContainerTitle>
          <Title>{data.title}</Title>
        </ContainerTitle>
        <Form onSubmit={handleToSubmit}>
          <ContainerFields>
          <PasswordInput
              name="password"
              label="Senha"
              type="password"
              placeholder={"Senha"}
            />
          <PasswordInput
              name="password"
              label="Senha"
              type="password"
              placeholder={"Digite novamente sua senha"}
            />
            <ContainerButton>
              <Button
                type='submit'
              > Confirmar </Button>
            </ContainerButton>
            {/* <InfoText> {data.doesNotHaveAccount}
              <Redirect to='/signup' replace >
                {data.signUp}
              </Redirect>
            </InfoText> */}
            <Terms> {data.privacy}
              <PrivacyPolicy>
                {data.privacyredirect}
              </PrivacyPolicy>
            </Terms>
          </ContainerFields>
        </Form>
      </ContainerLoginForm>
      <Carousel/>
      {/* Renderiza o PopUp quando showPopUp for true */}
      {showPopUp && <PopUp onClose={closePopUp} message={popUpMessage} subtitle={subtitle}/>}
    </Principal>
  );
};

export default RegisterNewPassword;
