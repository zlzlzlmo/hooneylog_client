import { useRouter } from 'next/router';
import { useState } from 'react';

const useSearchInput = () => {
  const router = useRouter();
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const makeActiveInputToBeFalse = () => setActiveInput(false);
  const makeActiveInputToBeTrue = () => setActiveInput(true);

  const handleSearchRoutePushFor = (value: string) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?search=${value}`);
  };

  return {
    handleSearchRoutePushFor,
    makeActiveInputToBeFalse,
    makeActiveInputToBeTrue,
    inputValue,
    activeInput,
    setInputValue,
  };
};

export default useSearchInput;
