import React, { useState } from 'react';
import Heading from '../components/common/Heading';
import TextSearch from '../components/common/TextSearch';
import DictInfo from '../components/DictInfo';
import useDictSearch from '../CustomHooks/useDictSearch';
import ErrorMsg from '../components/ErrorMsg';

const Dict = () => {
  // state
  const [wordInfo, setWordInfo] = useState({});
  const [searchWord, setSearchWord] = useState('');

  // call hook methods at the top level of a component
  const baseUrl = 'https://owlbot.info/api/v4/dictionary/';
  // set WordInfo - useEffect custom hook
  const searchResults = useDictSearch(baseUrl + searchWord);


  // functions
  const onSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchWord(searchTerm);
  };

  const handleSubmit = (searchResults) => {
    const { data, error } = searchResults;
    if (data !== {}) {
      setWordInfo(data);
    }
    if (error) {
      return <ErrorMsg errorText={error} />;
    }
  };

  return (
    <main>
      <Heading pageTitle={`Dictionary ${searchWord}`} />
      <TextSearch
        styleName={'words-text-search'}
        placeholder={'Type a word here'}
        onChangeHandler={onSearchChange}
        onSubmitHandler={handleSubmit(searchResults)}
      />
      <DictInfo wordInfo={wordInfo} />
    </main>
  );
};

export default Dict;
