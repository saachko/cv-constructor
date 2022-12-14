import styled from 'styled-components';

const TextareaWrapper = styled.div`
  
`;

const TextareaLabel = styled.label`
  display: block;
`;

const TextareaField = styled.textarea`
  width: 100%;
  min-height: 155px;
	max-height: 300px;
  resize: vertical;
  display: block;
  padding: 5px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.text};
  font-family: ${(props) => props.theme.fonts.text};
  border-radius: 3px;
  border: solid 1px ${(props) => props.theme.colors.grey};
  outline: none;
  transition: ${(props) => props.theme.effects.transition};
  margin-bottom: 15px;

  &:focus, &:hover{
    border: solid 1px ${(props) => props.theme.colors.primaryColor};
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.07);
  }
`;

export {
  TextareaWrapper,
  TextareaLabel,
  TextareaField,
};
