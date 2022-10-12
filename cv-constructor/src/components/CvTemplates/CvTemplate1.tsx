/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { CvTemplateProps } from 'utils/interfaces';
import CvBackground from './CvTemplate1Bg';

import {
  CvPage,
  CvBackgroundWrapper,
  GeneralWrapper,
  Photo,
} from './CvTemplate1.style';

function CvTemplate1({
  requiredData,
  additionalData,
}: CvTemplateProps) {
  return (
    <CvPage>
      <CvBackgroundWrapper>
        <CvBackground color='pink' />
      </CvBackgroundWrapper>
      <GeneralWrapper>
        <Photo src='https://firebasestorage.googleapis.com/v0/b/cv-constructor-de3f2.appspot.com/o/photos%2F1.jpeg?alt=media&token=43583753-2f8e-430b-9f84-132abe86e3db' />
        <p style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </GeneralWrapper>
    </CvPage >
  );
}

export default CvTemplate1;
