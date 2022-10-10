import React, { useEffect, useState } from 'react';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import { RequiredData } from 'utils/interfaces';

import Input from 'components/Input/Input'
import Textarea from 'components/Textarea/Textarea';
import Selector from 'components/Selector/Selector';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  InputsContainer,
  InputsTitle,
  InputsWrapper,
  TelephoneInputWrapper,
  CheckButton,
  iconStylesTrue,
  iconStylesFalse,
} from './InfoInputs.style';

import { messengers } from '../../../utils/variables';

interface InfoInputsProps {
  requiredData: RequiredData,
  setRequiredData: React.Dispatch<React.SetStateAction<RequiredData>>,
}

function InfoInputs({
  requiredData,
  setRequiredData
}: InfoInputsProps) {
  const [hasNoLinkedIn, setHasNoLinkedIn] = useState(false);

  useEffect(() => {
    if (!hasNoLinkedIn) {
      setRequiredData({ ...requiredData, linkedin: 'no' });
    }
  }, [hasNoLinkedIn])

  return (
    <InputsContainer>
      <InputsTitle>General information</InputsTitle>
      <InputsWrapper>
        <Input
          labelText="First name"
          type="text"
          id="firstName"
          name="firstName"
          onChange={({ target }) => setRequiredData({ ...requiredData, firstName: target.value })}
          minlength={1}
          inputWidth="35%"
        />
        <Input
          labelText="Last name"
          type="text"
          id="lastName"
          name="lastName"
          onChange={({ target }) => setRequiredData({ ...requiredData, lastName: target.value })}
          minlength={1}
          inputWidth="35%"
        />
        <Input
          labelText="Date of birth"
          type="date"
          id="birthday"
          name="birthday"
          placeholder="dd/mm/yyyy"
          onChange={({ target }) => setRequiredData({ ...requiredData, birthday: target.value })}
          inputWidth="25%"
        />
      </InputsWrapper>
      <Textarea
        labelText="About "
        id="about"
        name="about"
        placeholder="Write a few sentences about yourself..."
        onChange={({ target }) => setRequiredData({ ...requiredData, about: target.value })}
        minlength={50}
      />
      <InputsWrapper>
        <Input
          labelText="Preferred position"
          type="text"
          id="position"
          name="position"
          onChange={({ target }) => setRequiredData({ ...requiredData, position: target.value })}
          minlength={2}
        />
      </InputsWrapper>
      <InputsTitle>Contacts</InputsTitle>
      <InputsWrapper>
        <TelephoneInputWrapper>
          <IntlTelInput
            preferredCountries={['by', 'pl', 'ru']}
            onPhoneNumberChange={(valid: boolean, number: string) => setRequiredData({ ...requiredData, tel: number })}
          />
        </TelephoneInputWrapper>
        <InputsWrapper>
          <Selector
            options={messengers}
            onChange={({ target }) => setRequiredData({ ...requiredData, messenger: target.options[target.selectedIndex].text })}
          />
          <Input
            labelText=""
            type="text"
            id="messenger"
            name="messenger"
            onChange={({ target }) => setRequiredData({ ...requiredData, messengerLink: target.value })}
            minlength={1}
            inputWidth="240px"
          />
        </InputsWrapper>
      </InputsWrapper>
      <InputsWrapper>
        <Input
          labelText="E-mail"
          type="email"
          id="email"
          name="email"
          placeholder="e.g. example@gmail.com"
          onChange={({ target }) => setRequiredData({ ...requiredData, email: target.value })}
          minlength={5}
          inputWidth="47%"
        />
        <InputsWrapper>
          <Input
            labelText="LinkedIn"
            type="text"
            id="linkedin"
            name="linkedin"
            onChange={({ target }) => {
              setRequiredData({ ...requiredData, linkedin: target.value });
            }}
            minlength={1}
            inputWidth="325px"
            disabled={hasNoLinkedIn}
          />
          <CheckButton onClick={(event) => {
            event.preventDefault();
            setHasNoLinkedIn(!hasNoLinkedIn);
          }}>
            <CheckCircleIcon sx={hasNoLinkedIn ? iconStylesTrue : iconStylesFalse} />
          </CheckButton>
        </InputsWrapper>
      </InputsWrapper>
      <InputsWrapper>
        <Input
          labelText="Address"
          type="address"
          id="address"
          name="address"
          onChange={({ target }) => setRequiredData({ ...requiredData, address: target.value })}
        />
      </InputsWrapper>
    </InputsContainer>
  );
}

export default InfoInputs;
