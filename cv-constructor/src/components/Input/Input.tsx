import React from 'react';

import {
  InputWrapper,
  InputField,
  Label,
} from './Input.style';

interface InputProps {
  labelText: string,
  type: string,
  id: string,
  placeholder: string,
  name: string,
  onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
  minlength: number,
  inputWidth?: string,
}

function Input({
  labelText,
  type,
  id,
  placeholder,
  name,
  onChange,
  minlength,
  inputWidth
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{labelText}</Label>
      <InputField
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        minLength={minlength}
        onChange={onChange}
        width={inputWidth}
      />
    </InputWrapper>
  );
}

Input.defaultProps = {
  inputWidth: '280px',
};

export default Input;
