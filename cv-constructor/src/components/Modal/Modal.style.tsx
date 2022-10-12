import styled from 'styled-components';

import defaultTheme from 'styles/theme';

interface ModalProps {
  active: boolean,
}

const Shadow = styled.div<ModalProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: ${defaultTheme.effects.transition};
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 35;

  ${({ active }) => active && `
    pointer-events: all;
    opacity: 1;
  `}
`;

const ModalWindow = styled.div<ModalProps>`
  padding: 20px;
  border-radius: 5px;
  background-color: ${defaultTheme.colors.backgroundWhite};
  width: 500px;
  height: 175px;
  transition: ${defaultTheme.effects.transition};
  transform: scale(0.9);
  display: flex;
  flex-direction: column;

  ${({ active }) => active && `
    transform: scale(1);
  `}

  Button {
    align-self: center;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px; 

  Button#cleanLocal,
  Button#useLocal {
    margin-top: 10px;
    min-width: 180px;
  }
`;

const ModalText = styled.p`
  margin-bottom: 20px;
`;

export {
  Shadow,
  ModalWindow,
  ModalText,
  ButtonsWrapper
};
