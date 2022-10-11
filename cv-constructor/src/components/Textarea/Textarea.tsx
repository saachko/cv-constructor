import React from 'react';

import {
  TextareaWrapper,
  TextareaLabel,
  TextareaField,
} from './Textarea.style';

interface TextareaProps {
  labelText: string,
  id: string,
  name: string,
  onChange: (target: React.ChangeEvent<HTMLTextAreaElement>) => void,
  placeholder?: string,
  minlength?: number,
  value?: string
  required?: boolean,
}

function Textarea({
  labelText,
  id,
  placeholder,
  name,
  onChange,
  minlength,
  value,
  required
}: TextareaProps) {
  return (
    <TextareaWrapper>
      <TextareaLabel htmlFor={name}>{labelText}</TextareaLabel>
      <TextareaField
        id={id}
        placeholder={placeholder}
        name={name}
        minLength={minlength}
        onChange={onChange}
        value={value}
        required={required}
      />
    </TextareaWrapper>
  );
}

Textarea.defaultProps = {
  placeholder: "",
  minlength: 0,
  value: "",
  required: false,
};

export default Textarea;
