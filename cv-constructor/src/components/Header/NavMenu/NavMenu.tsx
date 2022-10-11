/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';

import defaultTheme from 'styles/theme';
import { links } from 'utils/variables';

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
  const location = useLocation();

  return (
    <nav>
      <NavMenuList>
        {links.map((item) => (
          <NavMenuItem key={item.id}>
            <NavMenuLink to={item.path} end>
              {item.text}
            </NavMenuLink>
          </NavMenuItem>
        ))}
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
