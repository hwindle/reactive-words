import React, { useState} from 'react';
import ErrorMsg from './ErrorMsg';
import SynonymList from './SynonymList';
import useThesaurus from '../CustomHooks/useThesaurus';

const ThesInfo = (props) => {
  // word to search for synonyms
  const { searchWord } = props;
  // atonyms etc
  const [atonyms, setAtonyms] = useState({});
  // similar  words - synonyms
  const [synWords, setSynWords] = useState({}); 
  // error msgs
  const [errorMsg, setErrorMsg] = useState('');

  const { data, error } = useThesaurus(baseUrl, searchWord);
  
  if (error) {
    setErrorMsg('Error on MW API fetch: ' + error);
  }

  return (
    <section className='card'>
      <h3 style={{textAlign: 'center', fontFamily: 'var(--body-font)'}}>
        {data[0]?.word} 
      </h3>
      <div style={{minWidth: '90%', maxWidth: '900px', margin: '2rem auto'}}>
        <SynonymList synWords={synWords} />
        {errorMsg ? <ErrorMsg errorText={errorMsg} /> : ''}
      </div>
    </section>
  );
};

export default ThesInfo;