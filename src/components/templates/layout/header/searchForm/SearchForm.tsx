import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { BsSearch } from 'react-icons/bs';
import Input from 'components/elements/input';
import { useRouter } from 'next/router';
import useSearchInput from './useSearchInput';

const SearchIcon = styled(BsSearch)`
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchForm = () => {
  const {
    handleSearchRoutePushFor,
    makeActiveInputToBeFalse,
    makeActiveInputToBeTrue,
    inputValue,
    activeInput,
    setInputValue,
  } = useSearchInput();

  return (
    <OutsideClickHandler onOutsideClick={makeActiveInputToBeFalse}>
      <Form onSubmit={handleSearchRoutePushFor(inputValue)}>
        <SearchIcon onClick={makeActiveInputToBeTrue} />
        <Input
          inputType="BASIC"
          activeInput={activeInput}
          placeholder="검색어를 입력해주세요."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form>
    </OutsideClickHandler>
  );
};

export default SearchForm;
