import React from 'react';

import {
  HeaderContainer,
  HeaderLink,
  HeaderText,
} from './Header.style';

import LogoSvg from './LogoSvg';
import NavMenu from './NavMenu/NavMenu';

interface HeaderProps {
  isLoggedIn: boolean,
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({
  isLoggedIn,
  setLoggedIn
}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <LogoSvg />
        <HeaderText>CV constructor</HeaderText>
      </HeaderLink>
      <NavMenu
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
      />
    </HeaderContainer>
  );
}

export default Header;
