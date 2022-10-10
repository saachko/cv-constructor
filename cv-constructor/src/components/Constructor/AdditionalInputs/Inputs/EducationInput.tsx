import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Input from 'components/Input/Input';

import {
  Container,
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface EducationProps {
  educationBlock: number[],
  setEducationBlock: React.Dispatch<React.SetStateAction<number[]>>,
}

function EducationInput({
  educationBlock,
  setEducationBlock,
}: EducationProps) {
  const removeBlock = educationBlock.slice(0, -1);

  return (
    <Container>
      <Wrapper>
        <Input
          labelText=""
          placeholder="Your university / online-school"
          type="text"
          id="university"
          name="university"
          onChange={() => console.log('aaa')}
          inputWidth="95%"
        />
        <RemoveButton onClick={(event) => {
          event.preventDefault();
          setEducationBlock(removeBlock);
        }}>
          <RemoveCircleIcon sx={iconStyles} />
        </RemoveButton>
      </Wrapper>
      <Input
        labelText=""
        placeholder="Qualification awarded / name of the course"
        type="text"
        id="qualification"
        name="qualification"
        onChange={() => console.log('aaa')}
      />
      <Wrapper>
        <Input
          labelText="From"
          type="date"
          id="study-from"
          name="study-from"
          placeholder="dd/mm/yyyy"
          onChange={() => console.log('aaa')}
        />
        <Input
          labelText="To"
          type="date"
          id="study-to"
          name="study-to"
          placeholder="dd/mm/yyyy"
          onChange={() => console.log('aaa')}
        />
      </Wrapper>
    </Container>
  );
}

export default EducationInput;
