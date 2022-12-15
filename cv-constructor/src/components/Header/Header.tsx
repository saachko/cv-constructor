import React from 'react';

import Logo from 'components/Logo/Logo';
import NavMenu from './NavMenu/NavMenu';

import {
  HeaderContainer,
  HeaderWrapper,
} from './Header.style';

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <NavMenu />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
