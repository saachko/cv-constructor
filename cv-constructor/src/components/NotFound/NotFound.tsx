import React from 'react';
import { NavLink } from 'react-router-dom';

import ErrorIcon from '@mui/icons-material/Error';

import Button from 'components/Button/Button';

import { NotFoundContainer, iconStyle } from './NotFound.style';

function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorIcon sx={iconStyle} />
      <p>Unfortunately, this page does not exist. </p>
      <NavLink to="/">
        <Button innerText="Return to Home page" id="home" />
      </NavLink>
    </NotFoundContainer>
  );
}

export default NotFound;
