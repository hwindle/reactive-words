import React from 'react';
import './ScrabbleWords.css';

const ScrabbleWords = () => {
  const favWords = {
    qWords: ['qi', 'suq', 'quep', 'qophs', 'qanat', 'cinq', 'quaint'],
    jWords: ['jomon', 'japes', 'jarks', 'jujus', 'benj', 'hajj'],
    xWords: ['ex', 'xi', 'rax', 'rex', 'xebec', 'xeres', 'xylol'],
    zWords: ['za', 'ze', 'zo', 'zax', 'zag', 'zonae', 'zitis'],
  };

  return (
    <div id='favourite-scrabble-words'>
      <h4 className='scrabble-words-heading'>Words containing J</h4>
      <section id='j-words'>
        <p className='fav-words-flex-wrap'>
          {favWords.jWords.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </p>
      </section>
      <h4 className='scrabble-words-heading'>Words containing Q</h4>
      <section id='q-words'>
        <p className='fav-words-flex-wrap' >
          {favWords.qWords.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </p>
      </section>
      <h4 className='scrabble-words-heading'>Words containing X</h4>
      <section id='x-words'>
        <p className='fav-words-flex-wrap' >
          {favWords.xWords.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </p>
      </section>
      <h4 className='scrabble-words-heading'>Words containing Z</h4>
      <section id='z-words'>
        <p className='fav-words-flex-wrap' >
          {favWords.zWords.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </p>
      </section>
    </div>
  );
};

export default ScrabbleWords;
