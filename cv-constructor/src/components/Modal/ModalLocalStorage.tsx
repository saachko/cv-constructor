import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  AdditionalData,
  RequiredData,
  SetState,
} from 'utils/interfaces';

import Button from 'components/Button/Button';

import {
  Shadow,
  ModalWindow,
  ModalText,
  ButtonsWrapper,
} from './Modal.style';

interface SignInProps {
  active: boolean;
  setActive: SetState<boolean>,
  text: string,
  setRequiredData: SetState<RequiredData>,
  setAdditionalData: SetState<AdditionalData>,
}

function Modal({
  active,
  setActive,
  text,
  setRequiredData,
  setAdditionalData,
}: SignInProps) {
  const cleanLocalStorage = () => {
    localStorage.removeItem('requiredData');
    localStorage.removeItem('additionalData');
    setActive(false);
  };

  const getDataFromLocalStorage = () => {
    if (localStorage.getItem('requiredData')) {
      setRequiredData(JSON.parse(localStorage.getItem('requiredData') as string));
    }
    if (localStorage.getItem('additionalData')) {
      const data = (JSON.parse(localStorage.getItem('additionalData') as string) as AdditionalData);
      setAdditionalData({
        ...data
      });
    }
    setActive(false);
  }

  return (
    <Shadow onClick={() => setActive(false)} active={active}>
      <ModalWindow onClick={(e) => e.stopPropagation()} active={active}>
        <ModalText>{text}</ModalText>
        <ButtonsWrapper>
          <NavLink to="/constructor">
            <Button
              innerText="Yes"
              id="useLocal"
              callback={getDataFromLocalStorage}
            />
          </NavLink>
          <Button
            innerText="No"
            id="cleanLocal"
            callback={cleanLocalStorage}
          />
        </ButtonsWrapper>
      </ModalWindow>
    </Shadow>
  );
}

export default Modal;
