import React, { useState } from 'react';
import Heading from '../components/common/Heading';
import ScrabbleInput from '../components/common/ScrabbleInput';
import ErrorMsg from '../components/ErrorMsg';

const Scrabble = () => {
  const [searchWord, setSearchWord] = useState('react');
  const [textSearchValue, setTextSearchValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

   // functions
   const onInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setTextSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textSearchValue === '') {
      setErrorMsg('No letters entered.');
    } else {
      setSearchWord(textSearchValue);
    }
  };

  return (
    <main>
      <Heading pageTitle={'Scrabble'} />
      <ScrabbleInput
        styleName={'words-scrabble-search'}
        placeholder={'Type your letters here'}
        onChangeHandler={onInputChange}
        onSubmitHandler={handleSubmit}
      />
      {/* Display error message box */}
      {errorMsg && <ErrorMsg errorText={errorMsg} />}
    </main>
  );
};

export default Scrabble;
