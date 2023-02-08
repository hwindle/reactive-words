import React, { useState, useEffect } from 'react';
import ErrorMsg from './ErrorMsg';
import SynonymList from './SynonymList';
import AntonymList from './AntonymList';
import useThesaurus from '../CustomHooks/useThesaurus';

const ThesInfo = (props) => {
  // word to search for synonyms
  const { textField: searchWord } = props;
  // atonyms etc
  const [antonyms, setAntonyms] = useState([]);
  // similar  words - synonyms
  const [synWords, setSynWords] = useState([]);
  // error msgs
  const [errorMsg, setErrorMsg] = useState('');
  

  const url = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${searchWord}?key=${process.env.REACT_APP_MW_THES_API_KEY}`;
  const { data, loading, error } = useThesaurus(searchWord);

  useEffect(() => {
    // get synonyms from data structure returned
    try {
      const { syns, ants } = data[0]?.meta;
      if (syns !== undefined) {
        console.dir(syns.flat());
        setSynWords(() => syns.flat());
      }
      if (ants !== undefined) {
        console.dir(ants.flat());
        setAntonyms(() => ants.flat());
      }
    } catch {
      console.log('Still loading data...');
    }

    if (error?.message) {
      setErrorMsg(() => (
        `Error on MW API fetch: ${error?.message}`
      ));
      //console.log('hello from error');
    }
    //console.log('hello outside of error, before return');
  }, [data, error]);

  return (
    <section className='card'>
      <h3 style={{ textAlign: 'center', fontFamily: 'var(--body-font)' }}>
        {searchWord.toTitleCase}
      </h3>
      <div style={{ minWidth: '90%', maxWidth: '900px', margin: '2rem auto' }}>
        {loading && <p>Similar Words Loading</p>}
        <SynonymList synWords={synWords} />
        <AntonymList antonyms={antonyms} />
        {errorMsg && <ErrorMsg errorText={errorMsg} />}
      </div>
    </section>
  );
};

ThesInfo.whyDidYouRender = true;
export default ThesInfo;
