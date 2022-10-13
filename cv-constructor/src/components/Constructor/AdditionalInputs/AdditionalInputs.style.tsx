import styled from 'styled-components';

import defaultTheme from 'styles/theme';

const AdditionalInputsContainer = styled.section`
  width: 100%;

  @media (max-width: 340px) {
    width: 85vw;
  }
`;

const InputsTitle = styled.h3`
  margin: 20px 0;
  display: flex;
`;

const AddButton = styled.button.attrs({
  type: 'button',
})`
  height: 100%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const iconStyles = {
  transition: `${defaultTheme.effects.transition}`,
  color: `${defaultTheme.colors.primaryColor}`,

  '&:hover': {
    opacity: `${defaultTheme.effects.hoverOpacity}`,
  }
};

export {
  AdditionalInputsContainer,
  InputsTitle,
  AddButton,
  iconStyles,
};
