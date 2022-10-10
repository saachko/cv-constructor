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
`;

const Note = styled.p`
  color: ${defaultTheme.colors.textHighlighted};
  margin: 25px 10px;
`;

export {
  ConstructorContainer,
  ConstructorForm,
  RequiredSection,
  RequiredFields,
  Note,
}
