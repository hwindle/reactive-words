import React, { useState } from 'react';
import Heading from '../components/common/Heading';
import TextSearch from '../components/common/TextSearch';
import DictInfo from '../components/DictInfo';
import ErrorMsg from '../components/ErrorMsg';

const Dict = () => {
  // state
  const [searchWord, setSearchWord] = useState('dictionary');
  
  // functions
  // const onSearchChange = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   setSearchWord(searchTerm);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchWord === '') {
      return <ErrorMsg errorText={'No search word entered.'} />;
    }
  };

  return (
    <main>
      <Heading pageTitle={`Dictionary`} />
      <TextSearch
        styleName={'words-text-search'}
        placeholder={'Type a word here'}
        // onChangeHandler={onSearchChange}
        onSubmitHandler={handleSubmit}
      />
      <DictInfo searchWord={searchWord} />
    </main>
  );
};

export default Dict;
