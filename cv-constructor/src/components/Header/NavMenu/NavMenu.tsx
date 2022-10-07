/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
  LogInButton,
} from './NavMenu.style';

interface NavMenuProps {
  isLoggedIn: boolean,
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

function NavMenu({
  isLoggedIn,
  setLoggedIn
}: NavMenuProps) {
  return (
    <nav>
      <NavMenuList>
        <NavMenuItem>
          <NavMenuLink to="/">Home</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink to="/constructor">Constructor</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink to="/my-cv">My CV</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <LogInButton>
            {isLoggedIn ? 'Log out' : 'Log in'}
          </LogInButton>
        </NavMenuItem>
      </NavMenuList>
    </nav>
  );
}

export default NavMenu;
