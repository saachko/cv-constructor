import React from 'react';

import BoltIcon from '@mui/icons-material/Bolt';
import GradeIcon from '@mui/icons-material/Grade';
import CheckIcon from '@mui/icons-material/Check';

import defaultTheme from '../styles/theme';

import {
  Description,
  RequiredData,
  AdditionalData,
  SelectorOption,
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

const messengers: SelectorOption[] = [{
  id: '1',
  name: 'Telegram',
},
{
  id: '2',
  name: 'Viber',
},
{
  id: '3',
  name: 'WhatsApp',
},
{
  id: '4',
  name: 'Skype',
}];

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
  linkedin: '-',
  address: '',
}

const langLevels: SelectorOption[] = [{
  id: '1',
  name: 'A1 - Elementary',
},
{
  id: '2',
  name: 'A2 - Pre-Intermediate',
},
{
  id: '3',
  name: 'B1 - Intermediate',
},
{
  id: '4',
  name: 'B2 - Upper-Intermediate',
},
{
  id: '3',
  name: 'C1 - Advanced',
},
{
  id: '4',
  name: 'C2 - Proficiency',
},
{
  id: '4',
  name: 'Native speaker',
}];

const defaultAdditionalData: AdditionalData = {
  work: [],
  education: [],
  languages: [],
  skills: '',
  projects: '',
}

export {
  description,
  messengers,
  defaultRequiredData,
  langLevels,
  defaultAdditionalData,
};
