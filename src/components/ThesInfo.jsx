import React, { useState } from 'react';
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
  

  const { data, loading, error } = useThesaurus(searchWord);
  //const {meta: thesData} = data;
  // get synonyms from data structure returned
  try {
    const { syns, ants } = data[0]?.meta;
    if (syns !== undefined) {
      //console.log(typeof(syns))
      setSynWords(syns);
    }
    if (ants !== undefined) {
      setAntonyms(ants);
    }
  } catch {
    console.log('Still loading data...');
  }

  if (error) {
    setErrorMsg(() => {
      'Error on MW API fetch: ';
    });
  }

  return (
    <section className='card'>
      <h3 style={{ textAlign: 'center', fontFamily: 'var(--body-font)' }}>
        {searchWord.toTitleCase}
      </h3>
      <div style={{ minWidth: '90%', maxWidth: '900px', margin: '2rem auto' }}>
        {loading ? <p>Words Loading</p> : ''}
        <SynonymList synWords={synWords} />
        <AntonymList antonyms={antonyms} />
        {errorMsg ? <ErrorMsg errorText={errorMsg} /> : ''}
      </div>
    </section>
  );
};

export default ThesInfo;
