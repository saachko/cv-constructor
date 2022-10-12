import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

import { AdditionalData, RequiredData } from 'utils/interfaces';

import { colorThemeSky } from 'styles/themesForCv'

import Button from 'components/Button/Button';
import CvTemplate1 from 'components/CvTemplates/CvTemplate1';

import {
  CreatorContainer,
  CvWrapper,
  CvToPrint,
  ButtonsWrapper,
} from './Creator.style';

interface CreatorProps {
  requiredData: RequiredData,
  additionalData: AdditionalData,
}

function Creator({
  requiredData,
  additionalData
}: CreatorProps) {
  const pdfRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });

  return (
    <CreatorContainer>
      <CvWrapper>
        <CvToPrint ref={pdfRef}>
          <CvTemplate1
            requiredData={requiredData}
            additionalData={additionalData}
            themeForCv={colorThemeSky}
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
