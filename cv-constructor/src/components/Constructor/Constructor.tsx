import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  AdditionalData,
  RequiredData,
  SetState,
} from 'utils/interfaces';

import {
  defaultAdditionalData,
  defaultRequiredData
} from 'utils/variables';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
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
  ButtonsWrapper,
  AdditionalButtonsWrapper
} from './Constructor.style';

interface ConstructorProps {
  imageUploaded: File | null,
  setImageUploaded: SetState<File | null>,
  imageUrl: string,
  setImageUrl: SetState<string>,
  requiredData: RequiredData,
  setRequiredData: SetState<RequiredData>,
  additionalData: AdditionalData,
  setAdditionalData: SetState<AdditionalData>,
}

function Constructor({
  imageUploaded,
  setImageUploaded,
  imageUrl,
  setImageUrl,
  requiredData,
  setRequiredData,
  additionalData,
  setAdditionalData,
}: ConstructorProps) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAdditionalShown, setIsAdditionalShown] = useState(false);
  const [isCreationPossible, setIsCreationPossible] = useState(false);
  const [modalActive, setModalActive] = useState(true);

  const isDataProvided = Object.values(requiredData).every((value: string) => value);

  const clearForm = () => {
    setRequiredData(defaultRequiredData);
    setAdditionalData(defaultAdditionalData);
  };

  const saveData = () => {
    localStorage.setItem('requiredData', JSON.stringify(requiredData));
    localStorage.setItem('additionalData', JSON.stringify(additionalData));
  }

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
          <ButtonsWrapper>
            <Button
              innerText='Clear form'
              id='clear'
              callback={clearForm}
            />
            <Button
              innerText='Show additional fields'
              id='additional'
              callback={() => setIsAdditionalShown(true)}
              disabled={isButtonDisabled}
            />
          </ButtonsWrapper>
        </RequiredSection>
        {isAdditionalShown &&
          <AdditionalSection>
            <Note>Fields in this section are additional, but we highly recommend to fill them</Note>
            <AdditionalInputs
              additionalData={additionalData}
              setAdditionalData={setAdditionalData}
            />
            <AdditionalButtonsWrapper>
              <Button
                innerText='Clear form'
                id='clear'
                callback={clearForm}
              />
              <NavLink to="/constructor/cv">
                <Button
                  innerText='Create CV'
                  id='create'
                  disabled={!isCreationPossible}
                  callback={saveData}
                />
              </NavLink>
            </AdditionalButtonsWrapper>
          </AdditionalSection>}
      </ConstructorForm>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        text="We kindly remind you that General information and Contacts are necessary to be filled. This information is minimal require to be able to create a CV"
      />
    </ConstructorContainer>
  );
}

export default Constructor;
