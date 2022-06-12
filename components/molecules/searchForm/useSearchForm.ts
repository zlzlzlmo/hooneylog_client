import useFilterByQueryParam from 'hooks/useFilterByQueryParam';
import { useState, FormEvent, ChangeEvent } from 'react';
import { appendQueryString } from 'util/common';

const useSearchForm = () => {
  const { handleFilterByQueryParam } = useFilterByQueryParam();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleFormSubmit = () => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === '') {
      return;
    }
    appendQueryString('search', searchValue);
    handleFilterByQueryParam();
  };

  const handleSearchValue = () => (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  return { handleFormSubmit, handleSearchValue };
};

export default useSearchForm;
