import React from 'react';
import {Container, Label} from './styles';

const Checkbox = () => {
  return (
    <Container>
      <input type="checkbox" id="keep-me-logged-in" />
      <Label htmlFor="keep-me-logged-in">Mantenha-me conectado</Label>
    </Container>
  );
};

export default Checkbox;
