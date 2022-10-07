import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      title: string,
      text: string,
      textHighlighted: string,
      textButton: string,
      backgroundWhite: string,
      backgroundGrey: string,
      yellow: string,
      blue: string,
      grey: string,
      lightgrey: string,
      green: string,
      pink: string,
      purple: string,
      primaryColor: string
    }
    fonts: {
      title: string,
      titleSmall: string,
      text: string,
    }
    fontSizes: {
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      text: string,
      smallText: string,
    }
    effects: {
      transition: string,
      hoverOpacity: string,
    }
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    title: '#02073e',
    text: '#343d48',
    textHighlighted: '#00a99d',
    textButton: '#ffffff',
    backgroundWhite: '#ffffff',
    backgroundGrey: '#f9fbfd',
    yellow: '#fbce82',
    blue: '#91afe3',
    grey: '#90a7bb',
    lightgrey: '#ecf2f6',
    green: '#81dc9a',
    pink: '#f7cedc',
    purple: '#bfa1f8',
    primaryColor: '#56bbd0'
  },
  fonts: {
    title: 'Arvo, serif',
    titleSmall: 'DM Sans, sans-serif',
    text: 'DM Sans, sans-serif',
  },
  fontSizes: {
    h1: '48px',
    h2: '36px',
    h3: '24px',
    h4: '20px',
    text: '18px',
    smallText: '14px',
  },
  effects: {
    transition: 'all 0.2s ease-out',
    hoverOpacity: '0.6',
  }
};

export default defaultTheme;
