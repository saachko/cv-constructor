import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { SetState, Work } from 'utils/interfaces';

import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';

import {
  Container,
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface WorkProps {
  work: Work;
  setWorks: SetState<Work[]>;
  removeBlock: () => void;
}

function WorkInput({
  work,
  setWorks,
  removeBlock,
}: WorkProps) {
  const updateWork = (key: string, value: string) => {
    setWorks((prev) =>
      prev.map((el) => (el.id === work.id ? { ...el, [key]: value } : el))
    );
  };

  return (
    <Container>
      <Wrapper>
        <Input
          labelText=""
          placeholder="Employer"
          type="text"
          id="employer"
          name="employer"
          value={work.employer}
          onChange={({ target }) => updateWork('employer', target.value)}
          inputWidth="95%"
        />
        <RemoveButton onClick={removeBlock}>
          <RemoveCircleIcon sx={iconStyles} />
        </RemoveButton>
      </Wrapper>
      <Input
        labelText=""
        placeholder="Occupation or position held"
        type="text"
        id="prevPosition"
        name="prevPosition"
        value={work.prevPosition}
        onChange={({ target }) => updateWork('prevPosition', target.value)}
      />
      <Wrapper>
        <Input
          labelText="From"
          type="date"
          id="workFrom"
          name="workFrom"
          placeholder="dd/mm/yyyy"
          value={work.workFrom}
          onChange={({ target }) => updateWork('workFrom', target.value)}
        />
        <Input
          labelText="To"
          type="date"
          id="workTo"
          name="workTo"
          placeholder="dd/mm/yyyy"
          value={work.workTo}
          onChange={({ target }) => updateWork('workTo', target.value)}
        />
      </Wrapper>
      <Textarea
        labelText=""
        id="tasks"
        name="tasks"
        placeholder="Describe your tasks and responsibilities..."
        value={work.tasks}
        onChange={({ target }) => updateWork('tasks', target.value)}
        minlength={20}
      />
    </Container>
  );
}

export default WorkInput;
