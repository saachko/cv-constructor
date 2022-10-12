import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import defaultTheme from '../../../styles/theme';

const NavMenuList = styled.ul`
  list-style-type: none;
`;

const NavMenuItem = styled.li`
  display: inline-block;
`;

const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${defaultTheme.colors.text};
  padding: 10px;
  transition: ${defaultTheme.effects.transition};

  &:hover {
    color: ${defaultTheme.colors.primaryColor};
  }

  &.active {
    color: ${defaultTheme.colors.primaryColor};
  }
`;

export {
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
}
