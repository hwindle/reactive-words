import React, {useState} from 'react';
import Heading from '../components/common/Heading';
import MeaningContainer from '../components/MeaningContainer';
import TextSearch from '../components/common/TextSearch';
import ErrorMsg from '../components/ErrorMsg';


const WordMeaning = () => {
  const [searchWord, setSearchWord] = useState('react');
  const [textSearchValue, setTextSearchValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // functions
  const onSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setTextSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textSearchValue === '') {
      setErrorMsg('No search word entered.');
    } else {
      setSearchWord(textSearchValue);
    }
  };

  return (
    <main>
      <Heading pageTitle={'Word Meaning'} />
      <TextSearch
        styleName={'meaning-text-search'}
        placeholder={'Type a word here'}
        onChangeHandler={onSearchChange}
        onSubmitHandler={handleSubmit}
      />
      <MeaningContainer searchWord={searchWord} />
      {/* Display error message box */}
      {errorMsg && <ErrorMsg errorText={errorMsg} />}
    </main>
  );
};

export default WordMeaning;