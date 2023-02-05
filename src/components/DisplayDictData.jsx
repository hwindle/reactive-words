import React from 'react';
import ErrorMsg from './ErrorMsg';

const DisplayDictData = (props) => {
  const {data, error} = props;

  const meanings = {};
  const definArray = [];
  try {
    const meanings = data[0].meanings[0];
    const definArray = meanings?.definitions;
    console.log(typeof(definArray));
  } catch (err) {
    console.info('Another error');
  }
  

  return (
    <section>
      <h3>
        {data[0]?.word} <span className='emoji'>{data?.definitions?.emoji}</span>
      </h3>
      <div className='two-columns'>
        <article>
          {/* data?.obj-key doesn't return an undefined key error
           if the item isn't there, or the data hasn't been returned */}
          <p>Pronunciation: {data[0]?.phonetics[0].text}</p>
          <p>Type of word: {meanings?.partOfSpeech}</p>
          <ul>
            {definArray.map((usage, i) => {
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