import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Input from 'components/Input/Input';
import Selector from 'components/Selector/Selector';

import { langLevels } from 'utils/variables';

import {
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface LangProps {
  languageBlock: number[],
  setLanguageBlock: React.Dispatch<React.SetStateAction<number[]>>,
}

function LanguageInput({
  languageBlock,
  setLanguageBlock,
}: LangProps) {
  const removeBlock = languageBlock.slice(0, -1);

  return (
    <Wrapper>
      <Input
        labelText=""
        type="text"
        id="lang"
        name="lang"
        onChange={() => console.log('aaa')}
        inputWidth="65%"
      />
      <Selector
        options={langLevels}
        onChange={() => console.log('aaa')}
      />
      <RemoveButton onClick={(event) => {
        event.preventDefault();
        setLanguageBlock(removeBlock);
      }}>
        <RemoveCircleIcon sx={iconStyles} />
      </RemoveButton>
    </Wrapper>
  );
}

export default LanguageInput;
