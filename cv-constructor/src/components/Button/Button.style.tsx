import styled from 'styled-components';

interface ColorProps {
  $color?: string,
}

const ButtonElement = styled.button<ColorProps>`
  min-width: 200px;
  height: 50px;
  padding: 5px;
  font-size: ${(props) => props.theme.fontSizes.h4};
  color: ${(props) => props.theme.colors.textButton};
  font-weight: 700;
  background-color: ${({ theme, $color }) => $color || theme.colors.primaryColor};
  border: none;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  transition: ${(props) => props.theme.effects.transition};
  overflow: hidden;

  &:hover{
    opacity: ${(props) => props.theme.effects.hoverOpacity};
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.1);
  } 

  &:disabled {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.textButton};
    opacity: 0.5;
    cursor: auto;

    &:hover{
      box-shadow: none;
    } 
  }

  &:active{
    opacity: 1.0;

    ${(props) => props.disabled && `
        opacity: 0.5;
    `}
  }
`;

export default ButtonElement;
