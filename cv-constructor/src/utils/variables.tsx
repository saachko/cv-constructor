import React from 'react';

import BoltIcon from '@mui/icons-material/Bolt';
import GradeIcon from '@mui/icons-material/Grade';
import CheckIcon from '@mui/icons-material/Check';

import defaultTheme from '../styles/theme';

import {
  Description, RequiredData,
} from './interfaces';

const description: Description[] = [
  {
    id: '1',
    title: 'Convenient',
    text: "You don't need to create CV yourselves anymore. Fill the form in CV constructor and your perfect CV is ready.",
    icon: <BoltIcon />,
    color: `${defaultTheme.colors.yellow}`,
  },
  {
    id: '2',
    title: 'Beautiful',
    text: "You can choose one of our samples for your CV. It's simple and beautiful.",
    icon: <GradeIcon />,
    color: `${defaultTheme.colors.purple}`,
  },
  {
    id: '3',
    title: 'Useful',
    text: "Only necessary information is asked in our form in order to make your CV useful and informative for HR.",
    icon: <CheckIcon />,
    color: `${defaultTheme.colors.blue}`,
  }
];

const messengers = ['Telegram', 'Viber', 'WhatsApp', 'Skype'];

const defaultRequiredData: RequiredData = {
  photo: '',
  firstName: '',
  lastName: '',
  birthday: '',
  about: '',
  position: '',
  tel: '',
  messenger: 'Telegram',
  messengerLink: '',
  email: '',
  linkedin: 'no',
  address: '',
}

export {
  description,
  messengers,
  defaultRequiredData
};
