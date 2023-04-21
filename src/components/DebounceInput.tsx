import { TextInput } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const DebounceInput = ({
  debounce = 500,
  value: initialValue,
  onChange,
  ...props
}: Props) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => { clearTimeout(timeout); };
  }, [debounce, onChange, value]);

  return (
    <TextInput
      {...props}
      onChange={(e) => { setValue(e.target.value); }}
      value={value}
    />
  );
};

export default DebounceInput;

type Props = {
  debounce?: number;
  icon?: React.ReactElement;
  onChange: (value: string | number) => void;
  value: string | number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>;
