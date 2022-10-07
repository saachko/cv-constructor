import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import defaultTheme from '../../styles/theme';

const HeaderContainer = styled.header`
  height: 60px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 20px;
  width: 1024px;
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: ${defaultTheme.colors.primaryColor};
  position: relative;

  svg {
    position: absolute;
    top: 5px;
  }
`;

const HeaderText = styled.p`
  display: inline-block;
  font-size: ${defaultTheme.fontSizes.h4};
  font-weight: 700;
  padding: 10px;
  padding-left: 45px;
`;

const NavMenuList = styled.ul`
  list-style-type: none;
`;

const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${defaultTheme.colors.text};
`;

export {
  HeaderContainer,
  HeaderLink,
  HeaderText,
  NavMenuList,
  NavMenuLink,
}
