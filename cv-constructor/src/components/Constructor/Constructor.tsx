import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  AdditionalData,
  RequiredData,
  SetState
} from 'utils/interfaces';

import Button from 'components/Button/Button';
import FileUploadInput from './FileInput/FileInput';
import InfoInputs from './InfoInputs/InfoInputs';
import AdditionalInputs from './AdditionalInputs/AdditionalInputs';

import {
  ConstructorContainer,
  ConstructorForm,
  RequiredSection,
  RequiredFields,
  Note,
  AdditionalSection,
} from './Constructor.style';

interface ConstructorProps {
  imageUploaded: File | null,
  setImageUploaded: SetState<File | null>,
  imageUrl: string,
  setImageUrl: SetState<string>,
  requiredData: RequiredData,
  setRequiredData: SetState<RequiredData>,
  additionalData: AdditionalData,
  setAdditionalData: SetState<AdditionalData>
}

function Constructor({
  imageUploaded,
  setImageUploaded,
  imageUrl,
  setImageUrl,
  requiredData,
  setRequiredData,
  additionalData,
  setAdditionalData
}: ConstructorProps) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAdditionalShown, setIsAdditionalShown] = useState(false);
  const [isCreationPossible, setIsCreationPossible] = useState(false);
  const [cvCreation, setCvCreation] = useState(false);

  const isDataProvided = Object.values(requiredData).every((value: string) => value);

  useEffect(() => {
    if (isDataProvided) {
      setIsButtonDisabled(false);
    }
  }, [requiredData]);

  useEffect(() => {
    setIsCreationPossible(isDataProvided);
  }, [requiredData]);

  return (
    <ConstructorContainer>
      <ConstructorForm>
        <RequiredSection>
          <Note>Fields in this section are to be filled</Note>
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
          <Button
            innerText='Show additional fields'
            id='additional'
            callback={() => setIsAdditionalShown(true)}
            disabled={isButtonDisabled}
          />
        </RequiredSection>
        {isAdditionalShown &&
          <AdditionalSection>
            <Note>Fields in this section are additional, but we highly recommend to fill them</Note>
            <AdditionalInputs
              additionalData={additionalData}
              setAdditionalData={setAdditionalData}
              cvCreation={cvCreation}
            />
            <NavLink to="/constructor/cv">
              <Button
                innerText='Create CV'
                id='create'
                disabled={!isCreationPossible}
                callback={() => {
                  setCvCreation(true);
                }}
              />
            </NavLink>
          </AdditionalSection>}
      </ConstructorForm>
    </ConstructorContainer>
  );
}

export default Constructor;
