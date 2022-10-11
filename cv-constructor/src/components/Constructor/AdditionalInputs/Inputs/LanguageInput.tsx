import React from 'react';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Input from 'components/Input/Input';
import Selector from 'components/Selector/Selector';

import { langLevels } from 'utils/variables';
import { Language, SetState } from 'utils/interfaces';

import {
  Wrapper,
  RemoveButton,
  iconStyles,
} from './Inputs.style';

interface LangProps {
  language: Language;
  setLanguages: SetState<Language[]>;
  removeBlock: () => void;
}

function LanguageInput({
  language,
  setLanguages,
  removeBlock,
}: LangProps) {
  const updateLanguage = (key: string, value: string) => {
    setLanguages((prev) =>
      prev.map((el) => (el.id === language.id ? { ...el, [key]: value } : el))
    );
  };

  return (
    <Wrapper>
      <Input
        labelText=""
        type="text"
        id="lang"
        name="lang"
        value={language.language}
        onChange={({ target }) => updateLanguage('language', target.value)}
        inputWidth="65%"
      />
      <Selector
        options={langLevels}
        value={language.level}
        onChange={({ target }) => updateLanguage('level', target.value)}
      />
      <RemoveButton onClick={removeBlock}>
        <RemoveCircleIcon sx={iconStyles} />
      </RemoveButton>
    </Wrapper>
  );
}

export default LanguageInput;
