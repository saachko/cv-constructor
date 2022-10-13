import styled, { css, keyframes } from 'styled-components';

import defaultTheme from 'styles/theme';

import { ColorProps } from 'utils/interfaces';

interface TemplateButtonProps {
  active: boolean,
}

const buttonAnimationLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(-15px);
  }
  75% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
`;

const buttonAnimationRight = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(15px);
  }
  75% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
`;

const CreatorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;

  @media (max-width: 570px) {
    width: 90vw;
  }
`;

const CvWrapper = styled.div`
  padding: 10px;
  max-width: 1024px;
  margin-top: -60px;
  display: flex;

  @media (max-width: 1035px) {
    display: grid;
    width: 100%
  }
`;

const CvToPrint = styled.div`
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
  transform: scale(0.9);

  @media (max-width: 1035px) {
    transform: scale(0.7);
    margin: -100px;
  }

  @media (max-width: 670px) {
    transform: scale(0.6);
    margin: -150px;
  }

  @media (max-width: 570px) {
    transform: scale(0.5);
    margin: -200px -165px;
  }

  @media (max-width: 540px) {
    transform: scale(0.35);
    margin: -300px -185px;
  }

  @media (max-width: 505px) {
    transform: scale(0.35) translateX(-100px);
  }

  @media (max-width: 420px) {
    transform: scale(0.35) translateX(-150px);
  }

  @media (max-width: 385px) {
    transform: scale(0.35) translateX(-190px);
  }

  @media (max-width: 365px) {
    transform: scale(0.35) translateX(-210px);
  }

  @media (max-width: 340px) {
    transform: scale(0.3) translateX(-290px);
  }

  @media print {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
    margin: -350px 0;
    transform: scale(1);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  align-items: center;

  @media (max-width: 505px) {
    flex-direction: column;
  }
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

const TemplateButton = styled.button<TemplateButtonProps>`
  width: 100px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: ${defaultTheme.effects.transition};

  &#prev:hover {
    animation: ${buttonAnimationLeft} 1s linear infinite;
  }

  &#prev {
    animation: ${({ active }) => active ? css`${buttonAnimationLeft} 1s linear infinite` : ''};
  }

  &#next:hover {
    animation: ${buttonAnimationRight} 1s linear infinite;
  }

  &#next {
    animation: ${({ active }) => active ? css`${buttonAnimationRight} 1s linear infinite` : ''};
  }
`;

const ThemeButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export {
  CreatorContainer,
  CvWrapper,
  CvToPrint,
  ButtonsWrapper,
  ControlButtons,
  ThemeButton,
  Note,
  TemplateButton,
  ThemeButtonsWrapper
};
