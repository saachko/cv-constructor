import React from 'react';

import { RequiredData } from 'utils/interfaces';

import FileUploadInput from './FileInput/FileInput';
import InfoInputs from './InfoInputs/InfoInputs';

import {
  ConstructorContainer,
  ConstructorForm,
  RequiredSection,
  RequiredFields,
  Note,
} from './Constructor.style';

interface ConstructorProps {
  imageUploaded: File | null,
  setImageUploaded: React.Dispatch<React.SetStateAction<File | null>>,
  imageUrl: string,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>,
  requiredData: RequiredData,
  setRequiredData: React.Dispatch<React.SetStateAction<RequiredData>>,
}

function Constructor({
  imageUploaded,
  setImageUploaded,
  imageUrl,
  setImageUrl,
  requiredData,
  setRequiredData
}: ConstructorProps) {
  return (
    <ConstructorContainer>
      <ConstructorForm>
        <RequiredSection>
          <Note>Fields in this sections are to be filled</Note>
          <RequiredFields>
            <FileUploadInput
              imageUploaded={imageUploaded}
              setImageUploaded={setImageUploaded}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              requiredData={requiredData}
              setRequiredData={setRequiredData}
            />
            <InfoInputs
              requiredData={requiredData}
              setRequiredData={setRequiredData}
            />
          </RequiredFields>
          {Object.values(requiredData).every((value) => value) && <p>Additional fields</p>}
        </RequiredSection>
      </ConstructorForm>
    </ConstructorContainer>
  );
}

export default Constructor;
