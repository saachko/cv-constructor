import React from 'react';
import { v4 } from 'uuid';

import Select from './Selector.style';

interface SelectorProps {
  options: string[],
  onChange: (target: React.ChangeEvent<HTMLSelectElement>) => void,
  value?: string,
}

function Selector({
  options,
  onChange,
  value,
}: SelectorProps) {
  return (
    <Select
      name="select"
      onChange={onChange}
      value={value}
    >
      {options.map((item, index) => (
        <option
          key={`${index + v4()}`}
          value={item}
        >{item}</option>
      ))}
    </Select>
  );
}

Selector.defaultProps = {
  value: "",
};

export default Selector;
