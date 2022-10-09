import React from 'react';

import {
  TextareaWrapper,
  TextareaLabel,
  TextareaField,
} from './Textarea.style';

interface TextareaProps {
  labelText: string,
  id: string,
  placeholder?: string,
  name: string,
  onChange: (target: React.ChangeEvent<HTMLTextAreaElement>) => void,
  minlength?: number,
}

function Textarea({
  labelText,
  id,
  placeholder,
  name,
  onChange,
  minlength,
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
      />
    </TextareaWrapper>
  );
}

Textarea.defaultProps = {
  placeholder: "",
  minlength: 0,
};

export default Textarea;
