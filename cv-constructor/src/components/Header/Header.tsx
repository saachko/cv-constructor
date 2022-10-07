import React from 'react';

import Logo from 'components/Logo/Logo';
import NavMenu from './NavMenu/NavMenu';

import HeaderContainer from './Header.style';

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
      <Logo />
      <NavMenu
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
      />
    </HeaderContainer>
  );
}

export default Header;
