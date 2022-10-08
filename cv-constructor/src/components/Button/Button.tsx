import React from 'react';

import ButtonElement from './Button.style';

interface ButtonProps {
  innerText: string;
  id: string;
  color?: string;
  disabled?: boolean;
  callback?: (id: string) => void;
}

function Button({
  innerText,
  id,
  disabled,
  color,
  callback,
}: ButtonProps) {
  return (
    <ButtonElement
      type="button"
      id={id}
      disabled={disabled}
      onClick={() => (callback ? callback(id) : undefined)}
      $color={color}
    >
      {innerText}
    </ButtonElement>
  );
}

Button.defaultProps = {
  disabled: false,
  color: '',
  callback: undefined,
};

export default Button;
