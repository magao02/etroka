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

const Recover: React.FC = () => {

  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpSubtitle, setPopUpSubtitle] = useState('');
  const message = 'Um e-mail de recuperação foi enviado para sua caixa postal!';
  const subtitle = 'Não se esqueça de verificar sua caixa de spam!';

  const handleToSubmit = (data: object) => {
    const message = 'Um e-mail de recuperação foi enviado para sua caixa postal!';
    const subtitle = 'Não se esqueça de verificar sua caixa de spam!';
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
        <ContainerReturnToPage>
          <Link to="/SignIn">
            <ReturnToPageIcon />
          </Link>
        </ContainerReturnToPage>
        <ContainerTitle>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
        </ContainerTitle>
        <Form onSubmit={handleToSubmit}>
          <ContainerFields>
            <InputForm
              name="e-mail"
              label="E-mail"
              type="text"
              placeholder="E-mail"
              // {data.placeholders.email}
            />
            <ContainerButton>
            <Button
              type='submit'
            > Continuar </Button>
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

export default Recover;
