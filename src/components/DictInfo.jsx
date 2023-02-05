import React from 'react';
import useDictSearch from '../CustomHooks/useDictSearch';
import ErrorMsg from './ErrorMsg';
import DisplayDictData from './DisplayDictData';

const DictInfo = (props) => {
  // search term entered
  const { searchWord } = props;

  // call hook methods at the top level of a component
  const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  //set WordInfo - useEffect custom hook
  const { data, error } = useDictSearch(baseUrl, searchWord);

  if (data) {
    return <DisplayDictData data={data} error={error} />; 
  } else {
    return <ErrorMsg errorText={'Dict info display problem'} />;
  }
};

export default DictInfo;
