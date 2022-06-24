import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { BsSearch } from 'react-icons/bs';
import Input from 'components/elements/input';
import { useRouter } from 'next/router';

const SearchIcon = styled(BsSearch)`
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchForm = () => {
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  return (
    <OutsideClickHandler onOutsideClick={() => setActiveInput(false)}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search?search=${inputValue}`);
        }}
      >
        <SearchIcon onClick={() => setActiveInput(true)} />
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
