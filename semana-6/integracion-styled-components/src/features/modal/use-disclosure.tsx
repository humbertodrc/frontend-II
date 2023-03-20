import { useState } from 'react';

type UseDisclosureType = {
  isOpen: boolean;
  toggle: () => void;
};

const useDisclosure = (initialValue = false): UseDisclosureType => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((value) => !value);

  return { isOpen: value, toggle };
};

export default useDisclosure;
