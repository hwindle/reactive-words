import React, { useState, useEffect} from 'react';
import ErrorMsg from './ErrorMsg';
import './DisplayDictData.css';

const DisplayDictData = (props) => {
  const {data, error} = props;

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!data) {
      setErrMsg('Word not found');
    }
    if (error) {
      setErrMsg(error?.message);
    }
  }, [data, error]);

  return (
    <section className='card'>
      <h3 style={{textAlign: 'center', fontFamily: 'var(--body-font)'}}>
        {data[0]?.word[0].toUpperCase() + data[0]?.word.slice(1)} 
      </h3>
      <div style={{minWidth: '90%', maxWidth: '900px', margin: '2rem auto'}}>
        <article>
          {/* data?.obj-key doesn't return an undefined key error
           if the item isn't there, or the data hasn't been returned */}
          <p>Pronunciation: {data[0]?.phonetics[1]?.text}</p>
          <p>Type of word: {data[0]?.meanings[0]?.partOfSpeech}</p>
          <ul id='dict-definitions'>
            {data[0]?.meanings[0]?.definitions.map((usage, i) => {
              return <li key={i}>{usage?.definition} <br /> {usage?.example}</li>;
            })}
          </ul>
        </article>
        {error?.message && <ErrorMsg errorText={errMsg} />}
      </div>
    </section>
  );
}

export default DisplayDictData;