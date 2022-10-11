import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { SetState } from 'utils/interfaces';

import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';

import {
  Container,
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface WorkProps {
  workBlock: number[],
  setWorkBlock: SetState<number[]>,
}

function WorkInput({
  workBlock,
  setWorkBlock,
}: WorkProps) {
  const removeBlock = workBlock.slice(0, -1);

  return (
    <Container>
      <Wrapper>
        <Input
          labelText=""
          placeholder="Employer"
          type="text"
          id="employer"
          name="employer"
          onChange={() => console.log('aaa')}
          inputWidth="95%"
        />
        <RemoveButton onClick={(event) => {
          event.preventDefault();
          setWorkBlock(removeBlock);
        }}>
          <RemoveCircleIcon sx={iconStyles} />
        </RemoveButton>
      </Wrapper>
      <Input
        labelText=""
        placeholder="Occupation or position held"
        type="text"
        id="prev-position"
        name="prev-position"
        onChange={() => console.log('aaa')}
      />
      <Wrapper>
        <Input
          labelText="From"
          type="date"
          id="work-from"
          name="work-from"
          placeholder="dd/mm/yyyy"
          onChange={() => console.log('aaa')}
        />
        <Input
          labelText="To"
          type="date"
          id="work-to"
          name="work-to"
          placeholder="dd/mm/yyyy"
          onChange={() => console.log('aaa')}
        />
      </Wrapper>
      <Textarea
        labelText=""
        id="tasks"
        name="tasks"
        placeholder="Describe your tasks and responsibilities..."
        onChange={() => console.log('aaa')}
        minlength={20}
      />
    </Container>
  );
}

export default WorkInput;
