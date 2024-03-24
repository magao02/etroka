import React, {Fragment} from 'react';
import {Container, Input, ErrorMessage} from './styles';
import {useField} from '@unform/core';

interface Props {
  name: string
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputForm: React.FC<Props> = (props) => {
  const inputRef = React.useRef(null);
  const {fieldName, registerField, error} = useField(props.name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Fragment>
      <Container error={Boolean(error)}>
        <Input
          ref={inputRef}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </Container>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </Fragment>
  );
};

export default InputForm;
