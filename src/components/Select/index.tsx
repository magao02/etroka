import React, {Fragment} from 'react';
import {useField} from '@unform/core';
import {Container} from './styles';
import {StyledSelect} from './styles';
import {Option} from './styles';
import {ErrorMessage} from './styles';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  options: string[];
  disabled?: boolean;
  onSelect?: (value: number) => void;
}

const Select: React.FC<Props> = (props) => {
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
        <StyledSelect
          ref={inputRef}
          disabled={props.disabled}
          defaultValue={props.placeholder ? '' : undefined}
          onChange={(e) => {
            const index = Number(e.target.value);
            props.onSelect && props.onSelect(index);
          }}
        >
          {props.placeholder && (
            <Option disabled hidden value="">
              {props.placeholder}
            </Option>
          )}
          {props.options.map((option, index) => {
            return (
              <Option key={option} value={index}>
                {option}
              </Option>
            );
          })}
      </StyledSelect>
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Fragment>
  );
};

export default Select;
