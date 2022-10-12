/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

import { AdditionalData, RequiredData } from 'utils/interfaces';
import { cvThemeButtons } from 'utils/variables';

import { colorThemeSky } from 'styles/themesForCv'

import Button from 'components/Button/Button';
import CvTemplate1 from 'components/CvTemplates/CvTemplate1';
import CvTemplate2 from 'components/CvTemplates/CvTemplate2';

import {
  CreatorContainer,
  CvWrapper,
  CvToPrint,
  ButtonsWrapper,
  ThemeButtons,
  ThemeButton,
  Note,
} from './Creator.style';

interface CreatorProps {
  requiredData: RequiredData,
  additionalData: AdditionalData,
}

function Creator({
  requiredData,
  additionalData
}: CreatorProps) {
  const [colorThemeForCv, setColorThemeForCv] = useState(colorThemeSky);

  const pdfRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });

  return (
    <CreatorContainer>
      <ThemeButtons>
        {cvThemeButtons.map((button) => (
          <ThemeButton
            key={button.id}
            color={button.color}
            onClick={() => setColorThemeForCv(button.theme)}
          />
        ))}
      </ThemeButtons>
      <Note>Please choose your color theme</Note>
      <CvWrapper>
        <CvToPrint ref={pdfRef}>
          <CvTemplate2
            requiredData={requiredData}
            additionalData={additionalData}
            themeForCv={colorThemeForCv}
          />
        </CvToPrint>
      </CvWrapper>
      <ButtonsWrapper>
        <NavLink to="/constructor">
          <Button
            innerText='Edit'
            id='edit'
          />
        </NavLink>
        <Button
          innerText='Print / save in PDF'
          id='pdf'
          callback={handlePrint}
        />
      </ButtonsWrapper>
    </CreatorContainer>
  );
}

export default Creator;
