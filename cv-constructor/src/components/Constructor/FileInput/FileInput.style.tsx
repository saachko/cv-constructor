import styled from 'styled-components';

import defaultTheme from '../../../styles/theme';

interface LabeProps {
  imageUploaded: File | null
}

const FileUploadInputContainer = styled.div`
  width: 210px;
  
  Button {
    width: 210px;
    font-size: ${defaultTheme.fontSizes.text};
    font-weight: 500;
  }
`;

const FileInputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
  transition: ${defaultTheme.effects.transition};

  &:hover{
    opacity: ${(props) => props.theme.effects.hoverOpacity};
    box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.1);
  }

  &:active{
    opacity: 1.0;
  }
`;

const FileInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const FileLabel = styled.label<LabeProps>`
  width: 100%;
  width: 210px;
  padding-right: 5px;
  height: 50px;
  background:  ${({ theme, imageUploaded }) => imageUploaded ? theme.colors.blue : theme.colors.primaryColor};
  color: ${defaultTheme.colors.textButton};
  font-size: ${defaultTheme.fontSizes.text};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
`;

const FileInputIconWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${defaultTheme.colors.textButton};
`;

const FileInputText = styled.p`
  line-height: 1;
  margin-top: 1px;
`;

const Photo = styled.div`
  width: 210px;
  height: 210px;
  background-color: ${defaultTheme.colors.backgroundGrey};
  border-radius: 3px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${defaultTheme.colors.grey};

  p {
    padding: 40px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export {
  FileUploadInputContainer,
  FileInputWrapper,
  FileInput,
  FileLabel,
  FileInputIconWrapper,
  FileInputText,
  Photo,
};
