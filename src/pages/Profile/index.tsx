import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import translation from 'locales/yup.locale.pt-br';


import PageContainer from 'components/PageContainer';
import JustifyContainer from 'components/JustifyContainer';
import Header from 'components/Header';
import InputForm from 'components/InputForm';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import ProfileAvatar from 'components/ProfileAvatar';
import Button from 'components/Button';

import {ContainerFields} from './styles';
import {ContainerForm} from './styles';
import {ContainerProfile} from './styles';
import {Paper} from './styles';
import {TitleArea} from './styles';
import {ContainerAvatar} from './styles';
import {ContainerReturnToPage} from './styles';
import {Title} from './styles';
import {TitleSection} from './styles';
import {ContainerButton} from './styles';
import {InformationSection} from './styles';
import {ProfileName} from './styles';
import {ProfileLocation} from './styles';
import {VerticalLine} from './styles';
import {ReturnToPageIcon} from './styles';
import {User} from 'types';
import useUsers from 'hooks/useUsers';
import useAuth from 'hooks/useAuth';
import Footer from 'components/Footer';
import AdsRight from 'components/AdsRight';
import AdsLeft from 'components/AdsLeft';


const Profile: React.FC = () => {
  const [disableEditModeFields, setDisableEditModeFields] = useState(true);
  const [disableEditModeProfile, setDisableEditModeProfile] = useState(true);
  const {user, fetchUserById} = useUsers();
  const {auth} = useAuth();

  useEffect(() => {
    fetchUserById(auth.user);
  }, []);

  const formRef = useRef<any>(null);
  async function handleToSubmit(data: User) {
    if (disableEditModeFields) {
      setDisableEditModeFields((prevState) => !prevState);
      return;
    }

    if (!disableEditModeFields) {
      Yup.setLocale(translation);
      try {
        if (formRef.current) {
          formRef.current.setErrors({});
        }

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          city: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        /* TODO: Send data to Back-end */
        console.log(data);
        setDisableEditModeFields((prevState) => !prevState);
      } catch (err) {
        console.log(err);
        const validationErrors: Record<string, string> = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            const errorPath = error.path;
            if (errorPath) {
              validationErrors[errorPath] = error.message;
            }
          });
          formRef.current?.setErrors(validationErrors);
        }
      }
    }
  }

  return (
    <PageContainer>
      <Header />
      <TitleArea>
        <Title>
          <ContainerReturnToPage>
            <Link to="/Announcements">
              <ReturnToPageIcon />
            </Link>
          </ContainerReturnToPage>
          Edite seu perfil
        </Title>
      </TitleArea>
      <JustifyContainer thereIsHeader >
        <Form
          onSubmit={handleToSubmit}
          ref={formRef}
          initialData={user as Record<string, any>}
        >
          <Paper>

            <ContainerForm>

              <TitleSection>
                Dados Pessoais
              </TitleSection>

              <ContainerFields>

                <InputForm
                  name="name"
                  label="Nome"
                  type="text"
                  placeholder={user?.name}
                  disabled={disableEditModeFields}
                />
                <EmailInput
                  name="email"
                  label="Email"
                  type="email"
                  placeholder={user?.email}
                  disabled={disableEditModeFields}
                />
                <PasswordInput
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="**********"
                  disabled={disableEditModeFields}
                />
                <InputForm
                  name="phone"
                  label="Telefone"
                  type="text"
                  placeholder={user?.phone}
                  disabled={disableEditModeFields}
                />
                <InputForm
                  name="city"
                  label="Cidade"
                  type="text"
                  placeholder={user?.city + " - " + user?.state}
                  disabled={disableEditModeFields}
                />
                <InputForm
                  name="birth"
                  label="Nascimento"
                  type="text"
                  placeholder="Data de nascimento"
                  disabled={disableEditModeFields}
                />
                <ContainerButton>
                  <Button
                    type="submit"
                    onClick={() => {
                      user && handleToSubmit(user);
                      setDisableEditModeFields((prev) => !prev);
                      setDisableEditModeProfile((prev) => !prev);
                    }}
                  >
                    {disableEditModeFields ? 'Editar Dados' : 'Salvar'}
                  </Button>
                </ContainerButton>
              
              </ContainerFields>
            </ContainerForm>

            <VerticalLine></VerticalLine>

            <ContainerProfile>

              <ContainerAvatar>
                <ProfileAvatar />
              </ContainerAvatar>

              <InformationSection>
                <ProfileName>
                  {user?.name}
                </ProfileName>
                <ProfileLocation>
                  {user?.city} - {user?.state}
                </ProfileLocation>
              </InformationSection>

            </ContainerProfile>
          </Paper>
        </Form>
    </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Profile;
