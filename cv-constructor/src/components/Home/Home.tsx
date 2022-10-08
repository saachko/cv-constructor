import React from 'react';
import { NavLink } from 'react-router-dom';

import description from 'utils/variables';

import Button from 'components/Button/Button';
import HomeSvg from './HomeSvg';

import {
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
} from './Home.style';

function Home() {
  return (
    <>
      <MainSection>
        <HomeSvgWrapper>
          <HomeSvg />
        </HomeSvgWrapper>
        <MainInfo>
          <MainTitle>
            CV constructor is your creative way to be hired
          </MainTitle>
          <p>
            CV shows a future employer what you have done in the past. It details your skills and training, work experience, and education, and, most importantly, the accomplishments you have made with past employers.
          </p>
          <NavLink to="/constructor">
            <Button
              innerText='Get Started'
              id='to-constructor'
            />
          </NavLink>
        </MainInfo>
      </MainSection>
      <DescriptionSection>
        <DescriptionSubtitle>Ideal solution for you</DescriptionSubtitle>
        <DescriptionTitle>Go beyond ultimate features of CV constructor</DescriptionTitle>
        <DescriptionItems>
          {description.map((item) => (
            <DescriptionItem key={item.id}>
              <IconWrapper color={item.color}>
                {item.icon}
              </IconWrapper>
              <DescriptionItemTitle>
                {item.title}
              </DescriptionItemTitle>
              <DescriptionItemText>
                {item.text}
              </DescriptionItemText>
            </DescriptionItem>
          ))}
        </DescriptionItems>
      </DescriptionSection>
    </>
  );
}

export default Home;
