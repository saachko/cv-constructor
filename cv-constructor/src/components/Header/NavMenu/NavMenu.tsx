/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';

import defaultTheme from 'styles/theme';

import { SetState } from 'utils/interfaces';
import { links } from 'utils/variables';

import {
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
} from './NavMenu.style';

function NavMenu() {
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
      </NavMenuList>
    </nav>
  );
}

export default NavMenu;
