import styled from 'styled-components';

const Select = styled.select`
  width: 110px;
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
`;

export default Select;
