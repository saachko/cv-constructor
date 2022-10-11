/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import jsPDF from 'jspdf';

import { AdditionalData, RequiredData } from 'utils/interfaces';

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

  const generatePDF = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html((pdfRef.current as HTMLElement), {
      callback(pdf) {
        pdf.save('cv.pdf');
      }
    });
  }

  return (
    <CreatorContainer>
      <CvWrapper>
        <CvToPrint ref={pdfRef}>
          <CvTemplate1 />
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
          innerText='PDF'
          id='pdf'
          callback={generatePDF}
        />
      </ButtonsWrapper>
    </CreatorContainer>
  );
}

export default Creator;
