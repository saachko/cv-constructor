import React from 'react';

import {
  LogoLink,
  LogoText
} from './Logo.style';

import LogoSvg from './LogoSvg';

function Logo() {
  return (
    <LogoLink to="/">
      <LogoSvg />
      <LogoText>CV constructor</LogoText>
    </LogoLink>
  );
}

export default Logo;
