import styled from 'styled-components';

interface InputProps {
  width?: string,
}

const InputWrapper = styled.div<InputProps>`
  margin-bottom: 15px;
  width: ${(props) => props.width};
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.text};
  font-family: ${(props) => props.theme.fonts.text};
  border-radius: 3px;
  border: solid 1px ${(props) => props.theme.colors.grey};
  outline: none;
  transition: ${(props) => props.theme.effects.transition};

  &:focus, &:hover {
    border: solid 1px ${(props) => props.theme.colors.primaryColor};
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.07);
  }

  &:disabled {
    border: solid 1px ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.lightgrey};
    box-shadow: none;
  }

  @media (max-width: 835px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
`;

export {
  InputWrapper,
  InputField,
  Label,
}
