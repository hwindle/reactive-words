import React from 'react';
import ErrorMsg from './ErrorMsg';

const DictInfo = (props) => {
  if (props.dictInfo === {}) {
    return <ErrorMsg errorText={'No word found'} />;
  }

  return (
    <section>
      <h3>Word <span className='emoji'>Emoji</span></h3>
      <div className='two-columns'>
        <article>
          <p>Pronunciation: </p>
          <p>Type of word: noun</p>
          <p>Definition:</p>
          <p>Example in a sentence: </p>
        </article>
        <figure>
          <img src='#' alt='word' />
        </figure>
      </div>
    </section>
  );
};

export default DictInfo;