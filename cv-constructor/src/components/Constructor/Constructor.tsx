import React from 'react';

import FileUploadInput from './FileInput/FileInput';

import {
  ConstructorContainer,
  ConstructorForm,
  RequiredSection,
} from './Constructor.style';

interface ConstructorProps {
  imageUploaded: File | null,
  setImageUploaded: React.Dispatch<React.SetStateAction<File | null>>,
  imageUrl: string,
  setImageUrl: React.Dispatch<React.SetStateAction<string>>,
}

function Constructor({
  imageUploaded,
  setImageUploaded,
  imageUrl,
  setImageUrl,
}: ConstructorProps) {
  return (
    <ConstructorContainer>
      <ConstructorForm>
        <RequiredSection>
          <FileUploadInput
            imageUploaded={imageUploaded}
            setImageUploaded={setImageUploaded}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
        </RequiredSection>
      </ConstructorForm>
    </ConstructorContainer>
  );
}

export default Constructor;
