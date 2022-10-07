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
`;

const LogInButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 10px;
  font-size: ${defaultTheme.fontSizes.text};
  color: ${defaultTheme.colors.text};
  transition: ${defaultTheme.effects.transition};

  &:hover {
    color: ${defaultTheme.colors.primaryColor};
  }
`;

export {
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
  LogInButton,
}
