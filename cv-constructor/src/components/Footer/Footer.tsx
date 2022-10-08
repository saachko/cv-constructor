import React from 'react';

import Logo from 'components/Logo/Logo';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
  FooterContainer,
  FooterWrapper,
  AuthorInfo,
  Copyright,
  Contacts,
  ContactLink,
  iconStyles,
} from './Footer.style'

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo />
        <AuthorInfo>
          <Copyright>&copy; 2022 made by Anastasiya Sachko</Copyright>
          <Contacts>
            <ContactLink
              href='https://github.com/saachko'
              target='_blank'
              title='Anastasiya on Github'
            >
              <GitHubIcon sx={iconStyles} />
            </ContactLink>
            <ContactLink
              href='tg://resolve?domain=saachko'
              target='_blank'
              title='Send a message'
            >
              <TelegramIcon sx={iconStyles} />
            </ContactLink>
            <ContactLink
              href='https://www.linkedin.com/in/saachko/'
              target='_blank'
              title='Anastasiya on LinkedIn'
            >
              <LinkedInIcon sx={iconStyles} />
            </ContactLink>
          </Contacts>
        </AuthorInfo>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
