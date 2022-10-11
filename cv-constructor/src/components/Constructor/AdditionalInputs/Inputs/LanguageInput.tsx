import React, { useState } from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Input from 'components/Input/Input';
import Selector from 'components/Selector/Selector';

import { defaultLanguage, langLevels } from 'utils/variables';
import { Languages } from 'utils/interfaces';

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
  const [languageData, setLanguageData] = useState<Languages>(defaultLanguage);

  const removeBlock = languageBlock.slice(0, -1);

  return (
    <Wrapper>
      <Input
        labelText=""
        type="text"
        id="lang"
        value={languageData.language}
        name="lang"
        onChange={({ target }) => {
          setLanguageData({ ...languageData, language: target.value });
        }}
        inputWidth="65%"
      />
      <Selector
        options={langLevels}
        onChange={({ target }) => {
          setLanguageData({ ...languageData, level: target.value });
        }}
        value={languageData.level}
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
