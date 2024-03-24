
// const SignUp = () => {
//   return (
//     <div className="conteiner">
//       <div className='divForm'>
//         <main>
//           <h1 className="h1 roxo1">Crie sua conta</h1>
//           <p className="action cinzaClaro">
//            Já possui uma conta? <a href="/SignIn" className='roxo1'>Login</a>
//           </p>

//           <SignUpForm></SignUpForm>
//         </main>

//         <footer>
//           <p className='H3 cinzaClaro'>
//             Ao registrar-se você concorda com nossos
//             <a className="roxo1" href="#"> termos </a>
//             e <a className="roxo1" href="#">políticas de privacidade</a>
//           </p>
//         </footer>
//       </div>

//       <Carousel></Carousel>
//     </div>
//   );
// };

import {Form} from '@unform/web';
import React from 'react';
import * as Yup from 'yup';
import InputForm from 'components/InputForm';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import PasswordInput from 'components/PasswordInput';

import {Principal} from './styles';
import {ContainerFields} from './styles';
import {ContainerTitle} from './styles';
import {ContainerLoginForm} from './styles';
import {ContainerButton} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {Message} from './styles';
import {Linked} from './styles';
import {Terms} from './styles';
import {PrivacyPolicy} from './styles';

// import data from './data.json';
import messages from './data.json';
import useUsers from 'hooks/useUsers';
import translation from 'locales/yup.locale.pt-br';
import {User} from 'types';
import {useNavigate} from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import {useRef} from 'react';

import data from './data.json';

interface FormFields {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  phone: string
}

const SignUp: React.FC = () => {
  const {signIn, auth} = useAuth();
  const navigate = useNavigate();
  const {createUser} = useUsers();
  const [doingSignUp, setDoingSignUp] = React.useState(false);
  const formRef = useRef<any>(null);

  const handleToSubmit = async (data: FormFields) => {
    console.log(data);
    Yup.setLocale(translation);

    try {
      if (formRef) {
        formRef.current?.setErrors({});
      }

      
      /*const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        password: Yup.string().required().min(8,
            messages.validations.size),
        passwordConfirmation: Yup.string().required().
            oneOf([Yup.ref('password'), null],
                messages.validations.password),
      });*/

      /*await schema.validate(data, {
        abortEarly: false,
      });*/
      let phone = '(' + data.phone.slice(0, 2) + ') ';
      phone = phone + data.phone.slice(2, 7) + '-';
      phone = phone + data.phone.slice(7, 11);
      console.log( data.name);
      const newUser: User = {
        name: data.name,
        email: data.email,
        password: data.password,
        city: 'Campina Grande',
        state: 'Paraíba',
        phone: phone,
      };
      setDoingSignUp(true);
      const res = await createUser(newUser);
      console.log(res);
      
      if (res?.status === 201) {
        setDoingSignUp(false);
        console.log('Usuário criado com sucesso');
        await signIn(data.email, data.password);
        if (localStorage) {
          console.log(auth);
          navigate('/announcements');
        }
      }else{
        setDoingSignUp(false);
        alert('Erro ao criar usuário por favor tente novamente e verifique os dados inseridos');
      }
    } catch (err) {
      console.log(err);
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          const errorPath = error.path;
          if (errorPath) {
            validationErrors[errorPath] = error.message;
          }
        });
        formRef.current?.setErrors(validationErrors);
      }
      console.log(validationErrors);
    }
  };
  if(doingSignUp){
    return(
    <Principal>
      <ContainerLoginForm>
        <ContainerTitle>
            <Title><h1 className="h1 roxo1">Aguarde enquanto fazemos seu cadastro</h1></Title>
        </ContainerTitle>
        </ContainerLoginForm>
    </Principal>)
  }
  return (
    <Principal>
      <ContainerLoginForm>
        <ContainerTitle>
            <Title>{data.title}</Title>
            <Description>
            {data.description}<Linked href="/SignIn">{data.redirect}</Linked>
            </Description>
        </ContainerTitle>
        <Form onSubmit={handleToSubmit}>
          <ContainerFields>
            <InputForm
              name="name"
              label="Nome"
              type="text"
              placeholder="Nome"
              // {data.placeholders.name}
            />
            <InputForm
              name="email"
              label="E-mail"
              type="text"
              placeholder="E-mail"
              // {data.placeholders.email}
            />
            <InputForm
             name="phone"
             label="Telefone"
             type="tel"
             placeholder="telefone"
            />
            <Message>
              O número deve ser escrito sem traços e sem espaços.
            </Message>
            <PasswordInput
              name="password"
              label="Senha"
              type="password"
              placeholder="Senha"
              // {data.placeholders.password}
            />
            <PasswordInput
              name="passwordConfirm"
              label="Confirme sua senha"
              type="password"
              placeholder="Confirme sua senha"
              // {data.placeholders.password}
            />
            <Message>
              A senha deve conter 1 letra maiúscula, 1 caractere especial (!,#,$,%) e 1 número.
            </Message>
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
              &nbsp;{data.privacyredirect}&nbsp;
            </PrivacyPolicy>
            </Terms>
          </ContainerFields>
        </Form>
      </ContainerLoginForm>
      <Carousel/>
    </Principal>
  );
};

  //   return (
//     <Principal>
//       <StyledDrawSignUp />
//     </ContainerDraw>
//     <ContainerLoginForm>
//       <Title> {messages.title} </Title>
//       <Description> {messages.description} </Description>
//       <Form ref={formRef} onSubmit={handleToSubmit}>
//         <ContainerLogo>
//           <StyledEscamboLogo />
//         </ContainerLogo>
//         <ContainerFields>
//           <InputForm
//             name="name"
//             label="Nome"
//             type="text"
//             placeholder="Nome de usuário"
//           />
//           <InputForm
//             name="email"
//             label="Email"
//             type="text"
//             placeholder="seunome@email.com"
//           />
//           <InputForm
//             name="phone"
//             label="Telefone"
//             type="tel"
//             placeholder="99999999999"
//           />
//           <InputForm
//             name="password"
//             label="Senha"
//             type="password"
//             placeholder="*******"
//           />
//           <InputForm
//             name="passwordConfirmation"
//             label="Confirmação de Senha"
//             type="password"
//             placeholder="*******"
//           />
//         </ContainerFields>
//         <ContainerButtons>
//           <Button type='submit' > Cadastre-se </Button>
//         </ContainerButtons>
//       </Form>
//     </ContainerLoginForm>
//     </Principal>
//   );
// };

export default SignUp;

