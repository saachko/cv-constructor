import React, { useEffect, useState } from 'react';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import { RequiredData, SetState } from 'utils/interfaces';

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
  setRequiredData: SetState<RequiredData>,
}

function InfoInputs({
  requiredData,
  setRequiredData
}: InfoInputsProps) {
  const [hasNoLinkedIn, setHasNoLinkedIn] = useState(false);

  useEffect(() => {
    if (hasNoLinkedIn) {
      setRequiredData({ ...requiredData, linkedin: '-' });
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
          value={requiredData.firstName}
          name="firstName"
          onChange={({ target }) => {
            setRequiredData((prev) => ({ ...prev, firstName: target.value }));
          }}
          minlength={1}
          inputWidth="35%"
          required
        />
        <Input
          labelText="Last name"
          type="text"
          id="lastName"
          value={requiredData.lastName}
          name="lastName"
          onChange={({ target }) => {
            setRequiredData((prev) => ({ ...prev, lastName: target.value }));
          }}
          minlength={1}
          inputWidth="35%"
          required
        />
        <Input
          labelText="Date of birth"
          type="date"
          id="birthday"
          value={requiredData.birthday}
          name="birthday"
          placeholder="dd/mm/yyyy"
          onChange={({ target }) => {
            setRequiredData((prev) => ({ ...prev, birthday: target.value }));
          }}
          inputWidth="25%"
          required
        />
      </InputsWrapper>
      <Textarea
        labelText="About"
        id="about"
        value={requiredData.about}
        name="about"
        placeholder="Write a few sentences about yourself..."
        onChange={({ target }) => {
          setRequiredData((prev) => ({ ...prev, about: target.value }));
        }}
        minlength={50}
        required
      />
      <InputsWrapper>
        <Input
          labelText="Preferred position"
          type="text"
          id="position"
          value={requiredData.position}
          name="position"
          onChange={({ target }) => {
            setRequiredData((prev) => ({ ...prev, position: target.value }));
          }}
          minlength={2}
          required
        />
      </InputsWrapper>
      <InputsTitle>Contacts</InputsTitle>
      <InputsWrapper>
        <TelephoneInputWrapper>
          <IntlTelInput
            value={requiredData.tel}
            preferredCountries={['by', 'pl', 'ru']}
            onPhoneNumberChange={(valid: boolean, number: string) => {
              setRequiredData((prev) => ({ ...prev, tel: number }));
            }}
          />
        </TelephoneInputWrapper>
        <InputsWrapper>
          <Selector
            options={messengers}
            onChange={({ target }) => {
              setRequiredData((prev) => ({ ...prev, messenger: target.value }));
            }}
            value={requiredData.messenger}
          />
          <Input
            labelText=""
            type="text"
            id="messenger"
            value={requiredData.messengerLink}
            name="messenger"
            onChange={({ target }) => {
              setRequiredData((prev) => ({ ...prev, messengerLink: target.value }));
            }}
            minlength={2}
            inputWidth="240px"
            required
          />
        </InputsWrapper>
      </InputsWrapper>
      <InputsWrapper>
        <Input
          labelText="E-mail"
          type="email"
          id="email"
          value={requiredData.email}
          name="email"
          placeholder="e.g. example@gmail.com"
          onChange={({ target }) => {
            setRequiredData((prev) => ({ ...prev, email: target.value }));
          }}
          minlength={5}
          inputWidth="47%"
          required
        />
        <InputsWrapper>
          <Input
            labelText="LinkedIn"
            type="text"
            id="linkedin"
            value={requiredData.linkedin}
            name="linkedin"
            onChange={({ target }) => {
              setRequiredData((prev) => ({ ...prev, linkedin: target.value }));
            }}
            minlength={2}
            inputWidth="325px"
            disabled={hasNoLinkedIn}
          />
          <CheckButton onClick={(event) => {
            event.preventDefault();
            setHasNoLinkedIn((prev) => !prev);
          }}>
            <CheckCircleIcon sx={hasNoLinkedIn ? iconStylesTrue : iconStylesFalse} />
          </CheckButton>
        </InputsWrapper>
      </InputsWrapper>
      <InputsWrapper>
        <Input
          labelText="Address"
          type="text"
          id="address"
          value={requiredData.address}
          name="address"
          onChange={({ target }) => {
            setRequiredData((prev) => ({ ...prev, address: target.value }));
          }}
          required
        />
      </InputsWrapper>
    </InputsContainer>
  );
}

export default InfoInputs;
