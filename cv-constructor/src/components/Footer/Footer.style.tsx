import styled from 'styled-components';

import defaultTheme from '../../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${defaultTheme.colors.backgroundGrey};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 1024px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.p`
  font-size: ${defaultTheme.fontSizes.smallText};
  border-bottom: 1px solid ${defaultTheme.colors.grey};
  padding-bottom: 10px;
`;

const Contacts = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ContactLink = styled.a`
  color: ${defaultTheme.colors.text};
`;

const iconStyles = {
  transition: `${defaultTheme.effects.transition}`,

  '&:hover': {
    opacity: `${defaultTheme.effects.hoverOpacity}`,
    color: `${defaultTheme.colors.primaryColor};`
  }
};

export {
  FooterContainer,
  FooterWrapper,
  AuthorInfo,
  Copyright,
  Contacts,
  ContactLink,
  iconStyles,
}
