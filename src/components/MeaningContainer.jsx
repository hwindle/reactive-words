import React from 'react';
import useDictSearch from '../CustomHooks/useDictSearch';
import MeaningDisplay from './MeaningDisplay';

const MeaningContainer = (props) => {
  const { searchWord } = props;

  // call hook methods at the top level of a component
  const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  //set WordInfo - useEffect custom hook
  const { data, loading, error } = useDictSearch(baseUrl, searchWord);

  return (
    <>
      {loading && <p>Wait for your etymology info...</p>}
      {/* {error && <ErrorMsg errorText={'Word not found'} />} */}
      <MeaningDisplay data={data} error={error} />
    </>
  ); 
};

export default MeaningContainer;