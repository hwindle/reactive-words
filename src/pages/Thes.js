import React, {useState} from 'react';
import Heading from '../components/common/Heading';
import TextSearch from '../components/common/TextSearch';
import ErrorMsg from '../components/ErrorMsg';
import ThesInfo from '../components/ThesInfo';

const Thes = () => {
  // state
  const [searchWord, setSearchWord] = useState('');
  const [textSearchValue, setTextSearchValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // functions
  const onSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    if (value.length >= 3) {
      setTextSearchValue(value);
    }
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
      <Heading pageTitle={'Thesaurus'} />
      <TextSearch
        styleName={'words-text-search'}
        placeholder={'Type a word here'}
        onChangeHandler={onSearchChange}
        onSubmitHandler={handleSubmit}
      />
      <ThesInfo searchWord={searchWord} />
      {/* Display error message box */}
      {errorMsg !== '' ? <ErrorMsg errorText={errorMsg} /> : ''}
    </main>
  );
};

export default Thes;