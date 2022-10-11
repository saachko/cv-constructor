import React from 'react';

import { SetState } from 'utils/interfaces';

import Logo from 'components/Logo/Logo';
import NavMenu from './NavMenu/NavMenu';

import {
  HeaderContainer,
  HeaderWrapper,
} from './Header.style';

interface HeaderProps {
  isLoggedIn: boolean,
  setLoggedIn: SetState<boolean>,
}

function Header({
  isLoggedIn,
  setLoggedIn
}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <NavMenu
          isLoggedIn={isLoggedIn}
          setLoggedIn={setLoggedIn}
        />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
