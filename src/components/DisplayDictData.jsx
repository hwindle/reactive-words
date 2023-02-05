import React from 'react';
import ErrorMsg from './ErrorMsg';

const DisplayDictData = (props) => {
  let {data, error} = props;


  return (
    <section className='card'>
      <h3 style={{textAlign: 'center', fontFamily: 'var(--body-font)'}}>
        {data[0]?.word.toTitleCase} 
      </h3>
      <div style={{minWidth: '90%', maxWidth: '900px', margin: '2rem auto'}}>
        <article>
          {/* data?.obj-key doesn't return an undefined key error
           if the item isn't there, or the data hasn't been returned */}
          <p>Pronunciation: {data[0]?.phonetics[1]?.text}</p>
          <p>Type of word: {data[0]?.meanings[0]?.partOfSpeech}</p>
          <ul>
            {data[0]?.meanings[0]?.definitions.map((usage, i) => {
              return <li key={i}>{usage?.definition} <br /> {usage?.example}</li>;
            })}
          </ul>
        </article>
        {/* <figure>
          <img src={data?.definitions?.image_url} alt={data?.word} />
        </figure> */}
        {error ? <ErrorMsg errorText={error} /> : ''}
      </div>
    </section>
  );
}

export default DisplayDictData;