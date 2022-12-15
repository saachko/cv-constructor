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
  name: string,
  onChange: (target: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string;
  placeholder?: string,
  minlength?: number,
  inputWidth?: string,
  disabled?: boolean,
  required?: boolean,
}

function Input({
  labelText,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  minlength,
  inputWidth,
  disabled,
  required
}: InputProps) {
  return (
    <InputWrapper width={inputWidth}>
      <Label htmlFor={name}>{labelText}</Label>
      <InputField
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        minLength={minlength}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
    </InputWrapper>
  );
}

Input.defaultProps = {
  value: "",
  placeholder: "",
  minlength: 0,
  inputWidth: '100%',
  disabled: false,
  required: false,
};

export default Input;
