import React, { useState } from 'react';
import Heading from '../components/common/Heading';
import TextSearch from '../components/common/TextSearch';
import DictInfo from '../components/DictInfo';
import ErrorMsg from '../components/ErrorMsg';

const Dict = () => {
  // state
  const [searchWord, setSearchWord] = useState('react');
  const [textSearchValue, setTextSearchValue] = useState('');

  // functions
  const onSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setTextSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textSearchValue === '') {
      return <ErrorMsg errorText={'No search word entered.'} />;
    } else {
      setSearchWord(textSearchValue);
    }
  };

  return (
    <main>
      <Heading pageTitle={`Dictionary`} />
      <TextSearch
        styleName={'words-text-search'}
        placeholder={'Type a word here'}
        onChangeHandler={onSearchChange}
        onSubmitHandler={handleSubmit}
      />
      <DictInfo searchWord={searchWord} />
    </main>
  );
};

export default Dict;
