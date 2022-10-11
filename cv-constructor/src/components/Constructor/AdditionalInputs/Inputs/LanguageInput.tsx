import React, { useState } from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Input from 'components/Input/Input';
import Selector from 'components/Selector/Selector';

import { defaultLanguage, langLevels } from 'utils/variables';
import { Languages, SetState } from 'utils/interfaces';

import {
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface LangProps {
  languageBlock: Array<number>,
  setLanguageBlock: SetState<Array<number>>,
  languageDataArray: Array<Languages>
  setLanguageDataArray: SetState<Array<Languages>>
  index: number,
}

function LanguageInput({
  languageBlock,
  setLanguageBlock,
  languageDataArray,
  setLanguageDataArray,
  index
}: LangProps) {
  const [languageData, setLanguageData] = useState(defaultLanguage);
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
          setLanguageDataArray((prev) => ([...prev, languageData]));
        }}
        inputWidth="65%"
      />
      <Selector
        options={langLevels}
        onChange={({ target }) => {
          setLanguageData({ ...languageData, level: target.value });
          setLanguageDataArray((prev) => ([...prev, languageData]));
        }}
        value={languageDataArray[index].level}
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
