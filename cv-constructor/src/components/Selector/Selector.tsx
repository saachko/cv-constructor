import React from 'react';
import { v4 } from 'uuid';

import { SelectorOption } from 'utils/interfaces';

import Select from './Selector.style';

interface SelectorProps {
  options: SelectorOption[],
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
      {options.map((item) => (
        <option
          key={`${item.id + v4()}`}
          value={item.name}
        >{item.name}</option>
      ))}
    </Select>
  );
}

Selector.defaultProps = {
  value: "",
};

export default Selector;
