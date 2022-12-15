
import React from 'react';

import { SetState } from 'utils/interfaces';

import Button from 'components/Button/Button';

import {
  Shadow,
  ModalWindow,
  ModalText,
} from './Modal.style';

interface SignInProps {
  active: boolean;
  setActive: SetState<boolean>,
  text: string,
}

function Modal({
  active,
  setActive,
  text,
}: SignInProps) {
  return (
    <Shadow onClick={() => setActive(false)} active={active}>
      <ModalWindow onClick={(e) => e.stopPropagation()} active={active}>
        <ModalText>{text}</ModalText>
        <Button
          innerText="Ok"
          id="ok"
          callback={() => setActive(false)}
        />
      </ModalWindow>
    </Shadow>
  );
}

export default Modal;
