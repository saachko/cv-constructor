import React from 'react';
import { v4 } from 'uuid';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import {
  AdditionalData,
  Education,
  Language,
  SetState,
  Work,
} from 'utils/interfaces';

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
  works: Work[],
  setWorks: SetState<Work[]>,
  educations: Education[],
  setEducations: SetState<Education[]>,
  languages: Language[],
  setLanguages: SetState<Language[]>,
}

function AdditionalInputs({
  additionalData,
  setAdditionalData,
  works,
  setWorks,
  educations,
  setEducations,
  languages,
  setLanguages,
}: AdditionalProps) {
  const addNewBlock = <T,>(
    newBlock: T,
    setState: SetState<T[]>
  ) => setState((prev) => [...prev, newBlock]);
  return (
    <AdditionalInputsContainer>
      <InputsTitle>
        Work experience
        <AddButton onClick={() => {
          addNewBlock({ ...defaultWork, id: v4() }, setWorks);
        }}>
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {works.map((item) => (
        <WorkInput
          key={item.id}
          work={item}
          setWorks={setWorks}
          removeBlock={() =>
            setWorks((prev) => prev.filter((el) => el.id !== item.id))
          }
        />
      ))}
      <InputsTitle>
        Education
        <AddButton onClick={() => {
          addNewBlock({ ...defaultEducation, id: v4() }, setEducations);
        }}>
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {educations.map((item) => (
        <EducationInput
          key={item.id}
          education={item}
          setEducations={setEducations}
          removeBlock={() =>
            setEducations((prev) => prev.filter((el) => el.id !== item.id))
          }
        />
      ))}
      <InputsTitle>
        Languages
        <AddButton onClick={() => {
          addNewBlock({ ...defaultLanguage, id: v4() }, setLanguages);
        }}>
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {languages.map((item) => (
        <LanguageInput
          key={item.id}
          language={item}
          setLanguages={setLanguages}
          removeBlock={() =>
            setLanguages((prev) => prev.filter((el) => el.id !== item.id))
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
