import { useState } from 'react';

const useInput = initalValue => {
  const [value, setValue] = useState(initalValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setValue(value);
    console.log(value);
  };
  return { value, onChange };
};

export default useInput;
