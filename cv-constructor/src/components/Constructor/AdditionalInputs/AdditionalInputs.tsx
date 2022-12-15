import React from 'react';
import { v4 } from 'uuid';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { AdditionalData, SetState } from 'utils/interfaces';

import {
  defaultEducation,
  defaultLanguage,
  defaultWork
} from 'utils/variables';

import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import LanguageInput from './Inputs/LanguageInput';
import EducationInput from './Inputs/EducationInput';
import WorkInput from './Inputs/WorkInput';

import {
  AddButton,
  AdditionalInputsContainer,
  iconStyles,
  InputsTitle
} from './AdditionalInputs.style';

interface AdditionalProps {
  additionalData: AdditionalData,
  setAdditionalData: SetState<AdditionalData>,
}

function AdditionalInputs({
  additionalData,
  setAdditionalData,
}: AdditionalProps) {
  const addNewBlock = <T,>(newBlock: T, key: keyof AdditionalData) =>
    setAdditionalData((prev) => ({ ...prev, [key]: [...prev[key], newBlock] }));

  return (
    <AdditionalInputsContainer>
      <InputsTitle>
        Work experience
        <AddButton
          onClick={() => {
            addNewBlock({ ...defaultWork, id: v4() }, 'works');
          }}
        >
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {additionalData.works.map((item) => (
        <WorkInput
          key={item.id}
          work={item}
          setAdditionalData={setAdditionalData}
          removeBlock={() =>
            setAdditionalData((prev) => ({
              ...prev,
              works: prev.works.filter((el) => el.id !== item.id),
            }))
          }
        />
      ))}
      <InputsTitle>
        Education
        <AddButton
          onClick={() => {
            addNewBlock({ ...defaultEducation, id: v4() }, 'educations');
          }}
        >
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {additionalData.educations.map((item) => (
        <EducationInput
          key={item.id}
          education={item}
          setAdditionalData={setAdditionalData}
          removeBlock={() =>
            setAdditionalData((prev) => ({
              ...prev,
              educations: prev.educations.filter((el) => el.id !== item.id),
            }))
          }
        />
      ))}
      <InputsTitle>
        Languages
        <AddButton
          onClick={() => {
            addNewBlock({ ...defaultLanguage, id: v4() }, 'languages');
          }}
        >
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {additionalData.languages.map((item) => (
        <LanguageInput
          key={item.id}
          language={item}
          setAdditionalData={setAdditionalData}
          removeBlock={() =>
            setAdditionalData((prev) => ({
              ...prev,
              languages: prev.languages.filter((el) => el.id !== item.id),
            }))
          }
        />
      ))}
      <InputsTitle>Skills</InputsTitle>
      <Textarea
        labelText=""
        id="skills"
        value={additionalData.skills}
        name="skills"
        placeholder="Write a list of your hard and soft skills or describe your professional achievement..."
        onChange={({ target }) => {
          setAdditionalData((prev) => ({ ...prev, skills: target.value }));
        }}
        minlength={50}
      />
      <InputsTitle>Projects</InputsTitle>
      <Input
        labelText=""
        type="text"
        id="projects"
        value={additionalData.projects}
        name="projects"
        placeholder="Add here a link to your portfolio or GitHub"
        onChange={({ target }) => {
          setAdditionalData((prev) => ({ ...prev, projects: target.value }));
        }}
      />
    </AdditionalInputsContainer>
  );
}

export default AdditionalInputs;
