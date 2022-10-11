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
}

function Textarea({
  labelText,
  id,
  placeholder,
  name,
  onChange,
  minlength,
  value,
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
      />
    </TextareaWrapper>
  );
}

Textarea.defaultProps = {
  placeholder: "",
  minlength: 0,
  value: "",
};

export default Textarea;
