import React from 'react';
import {useState} from 'react';
import './styles.css';

/* const formData = [
  {
    "Nome": undefined,
    "Email": undefined,
    "Senha": undefined,
    "Confirmacao": undefined
  },

  {
    "Telefone": undefined,
    "Estado": undefined,
    "Cidade": undefined,
    "Data de nascimento": undefined
  }
];*/

export default function SignUpForm() {
  const [step, setStep] = useState(0);

  const HandleSubmit = () => {
    if (step == 0) {
      setStep(step + 1);
      alert(step);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <fieldset>
        <input
          type="text"
          name="Nome"
          placeholder='Nome'
          required/>

        <input
          type='email'
          name="E-mail"
          placeholder='E-mail'
          required/>

        <input
          type="password"
          name='Senha'
          placeholder='Senha'
          required/>

        <input
          type="password"
          name='Confirmacao da senha'
          placeholder='Confirme sua senha'
          required/>

        <button className="action branco" type='submit'>Continuar</button>
      </fieldset>

      <fieldset className="hide">
        <input
          type="tel"
          name="Telefone"
          placeholder='Telefone'
          required/>

        <select name="Estado" required>
          <option value=''>Estado</option>
          <option value="PB">Paraíba</option>
        </select>

        <select name="Cidade" required>
          <option value=''>Cidade</option>
          <option value="Soledade">Soledade</option>
        </select>

        <input
          type="date"
          name='Data de nascimento'
          placeholder='Data de nascimento'
          required/>

        <button className="action branco" type='submit'>Registre-se</button>
      </fieldset>
    </form>
  );
};
