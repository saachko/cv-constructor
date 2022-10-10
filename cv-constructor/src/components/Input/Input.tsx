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
  placeholder?: string,
  name: string,
  onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
  minlength?: number,
  inputWidth?: string,
  disabled?: boolean;
}

function Input({
  labelText,
  type,
  id,
  placeholder,
  name,
  onChange,
  minlength,
  inputWidth,
  disabled
}: InputProps) {
  return (
    <InputWrapper width={inputWidth}>
      <Label htmlFor={name}>{labelText}</Label>
      <InputField
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        minLength={minlength}
        onChange={onChange}
        disabled={disabled}
      />
    </InputWrapper>
  );
}

Input.defaultProps = {
  placeholder: "",
  minlength: 0,
  inputWidth: '100%',
  disabled: false,
};

export default Input;
