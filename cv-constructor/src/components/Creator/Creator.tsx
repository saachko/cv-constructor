/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

import {
  AdditionalData,
  RequiredData,
  Template
} from 'utils/interfaces';
import { cvThemeButtons } from 'utils/variables';

import { colorThemeSky } from 'styles/themesForCv'

import Button from 'components/Button/Button';
import CvTemplate1 from 'components/CvTemplates/CvTemplate1';
import CvTemplate2 from 'components/CvTemplates/CvTemplate2';
import CvTemplate3 from 'components/CvTemplates/CvTemplate3';

import {
  CreatorContainer,
  CvWrapper,
  CvToPrint,
  ButtonsWrapper,
  ControlButtons,
  ThemeButton,
  Note,
  TemplateButton,
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
  const [templateId, setTemplateId] = useState(1);
  const [isLeftPushed, setIsLeftPushed] = useState(false);
  const [isRightPushed, setIsRightPushed] = useState(false);

  const pdfRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
  });

  const showPreviousTemplate = () => {
    if (templateId === 1) {
      setTemplateId(3);
    } else {
      setTemplateId(templateId - 1)
    }
  };

  const showNextTemplate = () => {
    if (templateId === 1) {
      setTemplateId(3);
    } else {
      setTemplateId(templateId - 1)
    }
  };

  const selectTemplateOnKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'ArrowLeft') {
      showPreviousTemplate();
      setIsLeftPushed(true);
      setTimeout(() => {
        setIsLeftPushed(false);
      }, 1000);
    } else if (e.code === 'ArrowRight') {
      showNextTemplate();
      setIsRightPushed(true);
      setTimeout(() => {
        setIsRightPushed(false);
      }, 1000);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', selectTemplateOnKeyDown);

    return () => (
      document.removeEventListener('keydown', selectTemplateOnKeyDown)
    );
  }, [templateId]);

  return (
    <CreatorContainer>
      <ControlButtons>
        <TemplateButton
          type="button"
          id="prev"
          active={isLeftPushed}
          onClick={showPreviousTemplate}
        >
          PREVIOUS TEMPLATE
        </TemplateButton>
        <>
          {cvThemeButtons.map((button) => (
            <ThemeButton
              key={button.id}
              color={button.color}
              onClick={() => setColorThemeForCv(button.theme)}
            />
          ))}
        </>
        <TemplateButton
          type="button"
          id="next"
          active={isRightPushed}
          onClick={showNextTemplate}
        >
          NEXT TEMPLATE
        </TemplateButton>
      </ControlButtons>
      <Note>Please choose your color theme</Note>
      <CvWrapper>
        <CvToPrint ref={pdfRef}>
          {templateId === 1 &&
            <CvTemplate1
              requiredData={requiredData}
              additionalData={additionalData}
              themeForCv={colorThemeForCv}
            />}
          {templateId === 2 &&
            <CvTemplate2
              requiredData={requiredData}
              additionalData={additionalData}
              themeForCv={colorThemeForCv}
            />}
          {templateId === 3 &&
            <CvTemplate3
              requiredData={requiredData}
              additionalData={additionalData}
              themeForCv={colorThemeForCv}
            />}
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
