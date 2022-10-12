import styled from 'styled-components';

import defaultTheme from 'styles/theme';

import { ColorProps } from 'utils/interfaces';

const CreatorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
`;

const CvWrapper = styled.div`
  padding: 10px;
  max-width: 1024px;
  margin-top: -60px;
`;

const CvToPrint = styled.div`
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
  transform: scale(0.9);

  @media print {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
    transform: scale(1);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const ThemeButtons = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 15px;
`;

const ThemeButton = styled.button<ColorProps>`
  background-color: ${({ color }) => color};
  display: block;
  border-radius: 3px;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Note = styled.p`
  color: ${defaultTheme.colors.textHighlighted};
  margin: 0px 10px;
`;

export {
  CreatorContainer,
  CvWrapper,
  CvToPrint,
  ButtonsWrapper,
  ThemeButtons,
  ThemeButton,
  Note,
};
