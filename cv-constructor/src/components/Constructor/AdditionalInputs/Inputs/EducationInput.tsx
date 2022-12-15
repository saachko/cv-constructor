import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { AdditionalData, Education, SetState } from 'utils/interfaces';

import Input from 'components/Input/Input';

import {
  Container,
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface EducationProps {
  education: Education;
  setAdditionalData: SetState<AdditionalData>;
  removeBlock: () => void;
}

function EducationInput({
  education,
  setAdditionalData,
  removeBlock
}: EducationProps) {
  const updateEducation = (key: string, value: string) =>
    setAdditionalData((prev) => ({
      ...prev,
      educations: prev.educations.map((el) =>
        el.id === education.id ? { ...el, [key]: value } : el
      ),
    }));

  return (
    <Container>
      <Wrapper>
        <Input
          labelText=""
          placeholder="Your university / online-school"
          type="text"
          id="organization"
          name="organization"
          value={education.organization}
          onChange={({ target }) =>
            updateEducation('organization', target.value)
          }
          inputWidth="95%"
        />
        <RemoveButton onClick={removeBlock}>
          <RemoveCircleIcon sx={iconStyles} />
        </RemoveButton>
      </Wrapper>
      <Input
        labelText=""
        placeholder="Qualification awarded / name of the course"
        type="text"
        id="degree"
        name="degree"
        value={education.degree}
        onChange={({ target }) =>
          updateEducation('degree', target.value)
        }
      />
      <Wrapper>
        <Input
          labelText="From"
          type="date"
          id="study-from"
          name="study-from"
          placeholder="dd/mm/yyyy"
          value={education.studyFrom}
          onChange={({ target }) =>
            updateEducation('studyFrom', target.value)
          }
        />
        <Input
          labelText="To"
          type="date"
          id="study-to"
          name="study-to"
          placeholder="dd/mm/yyyy"
          value={education.studyTo}
          onChange={({ target }) =>
            updateEducation('studyTo', target.value)
          }
        />
      </Wrapper>
    </Container>
  );
}

export default EducationInput;
