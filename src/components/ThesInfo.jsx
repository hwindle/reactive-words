import React, { useState} from 'react';
import ErrorMsg from './ErrorMsg';
import SynonymList from './SynonymList';
import AntonymList from './AntonymList';
import useThesaurus from '../CustomHooks/useThesaurus';

const ThesInfo = (props) => {
  // word to search for synonyms
  const { searchWord } = props;
  // atonyms etc
  const [antonyms, setAntonyms] = useState([]);
  // similar  words - synonyms
  const [synWords, setSynWords] = useState([]); 
  // error msgs
  const [errorMsg, setErrorMsg] = useState('');

  const url = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${searchWord}?key=${process.env.REACT_APP_MW_THES_API_KEY}`;
  const { data, loading, error } = useThesaurus(url);
  //const {meta: thesData} = data; 
  // get synonyms from data structure returned
  try {
    const { syns, ants } = data[0]?.meta;
    if (syns !== undefined) {
      setSynWords((prev) => (syns));
    }
    if (ants !== undefined) {
      setAntonyms((prev) => (ants));
    }
  } catch {
    console.log('Still loading data...');
  }

  if (error) {
    setErrorMsg(() => {'Error on MW API fetch: '});
    //console.log('hello from error');
  }
  //console.log('hello outside of error, before return');

  return (
    <section className='card'>
      <h3 style={{textAlign: 'center', fontFamily: 'var(--body-font)'}}>
        {searchWord.toTitleCase} 
      </h3>
      <div style={{minWidth: '90%', maxWidth: '900px', margin: '2rem auto'}}>
        {loading ? <p>Words Loading</p> : ''}
        <SynonymList synWords={synWords} />
        <AntonymList antonyms={antonyms} />
        {errorMsg ? <ErrorMsg errorText={errorMsg} /> : ''}
      </div>
    </section>
  );
};

export default ThesInfo;