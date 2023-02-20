import { useState } from 'react';

export const useDisclosure = () => {

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }

  const close = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    open,
    close,
    toggle
  }
}