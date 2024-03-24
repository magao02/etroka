import React, {Fragment} from 'react';
import {useField} from '@unform/core';
import {ErrorMessage} from './styles';
import {Container} from './styles';
import {Input} from './styles';


interface Props {
  name: string
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}


const MultlineInput: React.FC<Props> = (props) => {
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
      <Container>
        <Input
          ref={inputRef}
          placeholder={props.placeholder}
          disabled={props.disabled}
          rows={8}
          error={Boolean(error)}
        />
      </Container>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </Fragment>
  );
};

export default MultlineInput;
