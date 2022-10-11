import React, { useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';

import { RequiredData, SetState } from 'utils/interfaces';

import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import storage from '../../../firebase';

import {
  FileUploadInputContainer,
  FileInputWrapper,
  FileInput,
  FileLabel,
  FileInputIconWrapper,
  FileInputText,
  Photo,
} from './FileInput.style'

interface FileUploadInputProps {
  imageUploaded: File | null,
  setImageUploaded: SetState<File | null>,
  imageUrl: string,
  setImageUrl: SetState<string>,
  requiredData: RequiredData,
  setRequiredData: SetState<RequiredData>,
}

function FileUploadInput({
  imageUploaded,
  setImageUploaded,
  imageUrl,
  setImageUrl,
  requiredData,
  setRequiredData,
}: FileUploadInputProps) {
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = () => {
    if (imageUploaded == null) return;
    const imageRef = ref(storage, `photos/${imageUploaded.name + v4()}`);
    uploadBytes(imageRef, imageUploaded).then((snapshot) => {
      setIsLoading(true);
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setRequiredData({ ...requiredData, photo: url });
        setIsLoading(false);
      });
    });
  };

  return (
    <FileUploadInputContainer>
      <Photo>
        {imageUrl && !isLoading && <img src={imageUrl} alt='uploadedPhoto' />}
        {!imageUrl && !isLoading && <p>YOUR PHOTO WILL BE HERE</p>}
        {isLoading && <Loader />}
      </Photo>
      <FileInputWrapper>
        <FileInput
          name="file"
          type="file"
          id="input__file"
          accept="image/png, image/gif, image/jpeg"
          onChange={(event) => {
            setImageUploaded((event.target.files as FileList)[0]);
          }}
        />
        <FileLabel
          htmlFor="input__file"
          imageUploaded={imageUploaded}
        >
          <FileInputIconWrapper>
            <SwitchAccountIcon />
          </FileInputIconWrapper>
          <FileInputText>
            {imageUploaded
              ? 'Change your choice'
              : 'Choose your photo'}
          </FileInputText>
        </FileLabel>
      </FileInputWrapper>
      <Button
        innerText='Upload your photo'
        id='upload'
        callback={uploadFile}
      />
    </FileUploadInputContainer>
  );
}

export default FileUploadInput;
