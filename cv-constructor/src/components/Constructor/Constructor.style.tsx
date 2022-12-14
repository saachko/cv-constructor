import styled from 'styled-components';

import defaultTheme from 'styles/theme';

const ConstructorContainer = styled.main`
  width: 1024px;
  padding: 15px;

  @media (max-width: 1030px) {
    display: grid;
    width: 100%
  }
`;

const ConstructorForm = styled.form`
  Button {
    font-size: ${defaultTheme.fontSizes.text};
    font-weight: 500;
  }
`;

const RequiredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RequiredFields = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: space-between;

  @media (max-width: 595px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Note = styled.p`
  color: ${defaultTheme.colors.textHighlighted};
  margin: 25px 10px;
  text-align: center;
`;

const AdditionalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 15px;

  @media (max-width: 595px) {
    align-self: center;
  }

  @media (max-width: 525px) {
    flex-direction: column;
  }
`;

const AdditionalButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 525px) {
    flex-direction: column;
  }
`;

export {
  ConstructorContainer,
  ConstructorForm,
  RequiredSection,
  RequiredFields,
  Note,
  AdditionalSection,
  ButtonsWrapper,
  AdditionalButtonsWrapper
}
