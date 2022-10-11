import React, { useState } from 'react';
import { v4 } from 'uuid';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { AdditionalData } from 'utils/interfaces';

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
  setAdditionalData: React.Dispatch<React.SetStateAction<AdditionalData>>
}

function AdditionalInputs({
  additionalData,
  setAdditionalData
}: AdditionalProps) {
  const [languageBlock, setLanguageBlock] = useState<Array<number>>([1]);
  const [educationBlock, setEducationBlock] = useState<Array<number>>([1]);
  const [workBlock, setWorkBlock] = useState<Array<number>>([1]);
  // const [languageData, setLanguageData] = useState<Languages>(defaultLanguage);

  // useEffect(() => {
  //   setAdditionalData((prev) => ({ ...prev, languages: [...prev.languages, languageData] }));
  //   setLanguageData(defaultLanguage);
  //   console.log(additionalData);
  // }, [languageBlock])

  return (
    <AdditionalInputsContainer>
      <InputsTitle>
        Work experience
        <AddButton onClick={(event) => {
          event.preventDefault();
          setWorkBlock((prev) => [...prev, 1]);
        }}>
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {workBlock.map((element) => (
        <WorkInput
          key={element + v4()}
          workBlock={workBlock}
          setWorkBlock={setWorkBlock}
        />
      ))}
      <InputsTitle>
        Education
        <AddButton onClick={(event) => {
          event.preventDefault();
          setEducationBlock((prev) => [...prev, 1]);
        }}>
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {educationBlock.map((element) => (
        <EducationInput
          key={element + v4()}
          educationBlock={educationBlock}
          setEducationBlock={setEducationBlock}
        />
      ))}
      <InputsTitle>
        Languages
        <AddButton onClick={(event) => {
          event.preventDefault();
          setLanguageBlock((prev) => [...prev, 1]);
        }}>
          <AddCircleIcon sx={iconStyles} />
        </AddButton>
      </InputsTitle>
      {languageBlock.map((element) => (
        <LanguageInput
          key={element + v4()}
          languageBlock={languageBlock}
          setLanguageBlock={setLanguageBlock}
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
