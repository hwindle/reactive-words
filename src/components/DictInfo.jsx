import React from 'react';
import useDictSearch from '../CustomHooks/useDictSearch';
import ErrorMsg from './ErrorMsg';

const DictInfo = (props) => {
  // search term entered
  const { searchWord } = props;

  // call hook methods at the top level of a component
  const baseUrl = 'https://owlbot.info/api/v4/dictionary/';
  //set WordInfo - useEffect custom hook
  const { data, error } = useDictSearch(baseUrl + searchWord);

  // if (!firstLoad && searchWord === '') {
  //   return <ErrorMsg errorText={'No word typed in.' + error} />;
  // } else if (!data) {
  //   return (
  //     <ErrorMsg errorText={'No words found in dictionary. Sorry' + error} />
  //   );
  // }
  return (
    <section>
      <h3>
        {'' || data.word} <span className='emoji'>{data.definitions.emoji}</span>
      </h3>
      <div className='two-columns'>
        <article>
          <p>Pronunciation: {'' || data.pronunciation}</p>
          <p>Type of word: {'' || data.definitions.type}</p>
          <p>Definition: {'' || data.definitions.definition}</p>
          <p>Example in a sentence: {'' || data.definitions.example}</p>
        </article>
        <figure>
          <img src={'' || data.definitions.image_url} alt={'' || data.word} />
        </figure>
        <ErrorMsg errorText={error} />
      </div>
    </section>
  );
};

export default DictInfo;
