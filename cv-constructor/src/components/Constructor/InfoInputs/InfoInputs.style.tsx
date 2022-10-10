import styled from 'styled-components';

import defaultTheme from 'styles/theme';

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const InputsTitle = styled.h3`
  margin: 20px 0;
`;

const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  select {
    margin-right: 5px;
  }
`;

const TelephoneInputWrapper = styled.div`
  width: 47%;
  
  div.intl-tel-input {
    width: 100%;
  }

  ul {
    height: 150px;
    width: 280px;
    font-size: ${(props) => props.theme.fontSizes.smallText};
    
    li {
      white-space: normal;
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 5px;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.text};
    border-radius: 3px;
    border: solid 1px ${(props) => props.theme.colors.grey};
    outline: none;
    transition: ${(props) => props.theme.effects.transition};

    &:focus, &:hover{
      border: solid 1px ${(props) => props.theme.colors.primaryColor};
      box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.07);
    }
  }
`;

const CheckButton = styled.button`
  height: 100%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const iconStylesTrue = {
  transition: `${defaultTheme.effects.transition}`,
  color: `${defaultTheme.colors.grey}`,

  '&:hover': {
    opacity: `${defaultTheme.effects.hoverOpacity}`,
  }
};

const iconStylesFalse = {
  transition: `${defaultTheme.effects.transition}`,
  color: `${defaultTheme.colors.primaryColor}`,

  '&:hover': {
    opacity: `${defaultTheme.effects.hoverOpacity}`,
  }
};

export {
  InputsContainer,
  InputsTitle,
  InputsWrapper,
  TelephoneInputWrapper,
  CheckButton,
  iconStylesTrue,
  iconStylesFalse,
};
