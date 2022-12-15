import styled from 'styled-components';

import defaultTheme from '../../styles/theme';

interface ColorProps {
  color: string,
}

const HomeSvgWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -5;

  @media (max-width: 968px) {
    opacity: 0.7;
  }

  svg {
    position: absolute;
    top: -10%;
    right: 0;
  }
`;

const MainSection = styled.section`
  width: 1024px;
  padding: 15px;
  height: 630px;
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 1050px) {
    display: grid;
    width: 100%
  }

  @media (max-width: 968px) {
    display: grid;
    width: 100%;
    justify-content: center;  
  }
`;

const MainInfo = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 968px) {
    background-color: rgba(255,255,255, 0.8);
    padding: 20px;
    border-radius: 5px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

const MainTitle = styled.h1`
  font-size: ${defaultTheme.fontSizes.h2};
`;

const DescriptionSection = styled.section`
  width: 100%;
  background-color: ${defaultTheme.colors.backgroundGrey};
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 15px;
`;

const DescriptionSubtitle = styled.p`
  color: ${defaultTheme.colors.textHighlighted};
`;

const DescriptionTitle = styled.h2`
  font-size: ${defaultTheme.fontSizes.h3};
  text-align: center;
`;

const DescriptionItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  max-width: 800px;
`;

const DescriptionItem = styled.div`
  width: 250px;
  padding: 10px;
  border: 1px solid ${defaultTheme.colors.lightgrey};
  border-radius: 3px;
  height: 230px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div<ColorProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: ${defaultTheme.colors.textButton};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const DescriptionItemTitle = styled.h3`
  font-size: ${defaultTheme.fontSizes.h4};
  margin-bottom: 15px; 
`;

const DescriptionItemText = styled.p`
  
`;

export {
  HomeSvgWrapper,
  MainSection,
  MainInfo,
  MainTitle,
  DescriptionSection,
  DescriptionSubtitle,
  DescriptionTitle,
  DescriptionItems,
  DescriptionItem,
  IconWrapper,
  DescriptionItemTitle,
  DescriptionItemText,
}
