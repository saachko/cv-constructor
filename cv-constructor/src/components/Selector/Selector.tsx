import React from 'react';
import { v4 } from 'uuid';

import Select from './Selector.style';

interface SelectorProps {
  options: string[],
  onChange: (target: React.ChangeEvent<HTMLSelectElement>) => void,
}

function Selector({ options, onChange }: SelectorProps) {
  return (
    <Select
      name="select"
      onChange={onChange}
    >
      {options.map((item, index) => (
        <option
          key={`${index + v4()}`}
          value={`value${index}`}
        >{item}</option>
      ))}
    </Select>
  );
}

export default Selector;
