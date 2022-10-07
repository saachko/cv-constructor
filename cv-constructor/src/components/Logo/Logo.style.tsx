import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import defaultTheme from '../../styles/theme';

const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: ${defaultTheme.colors.primaryColor};
  position: relative;

  svg {
    position: absolute;
    top: 5px;
  }
`;

const LogoText = styled.p`
  display: inline-block;
  font-size: ${defaultTheme.fontSizes.h4};
  font-weight: 700;
  padding: 10px;
  padding-left: 45px;
`;

export {
  LogoLink,
  LogoText,
}
