import React from 'react';
import { useLocation } from 'react-router-dom';

import { links } from 'utils/variables';

import {
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
} from './NavMenu.style';

function NavMenu() {
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
