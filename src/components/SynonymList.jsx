import React from 'react';

const SynonymList = (props) => {
  let words = props.synWords;
  if (words === []) {
    words = ['No search word entered'];
  }

  return (
    <div>
      <h4 style={{lineHeight: 2, textAlign: 'center', fontFamily: 'var(--body-font)'}}>Similar Words</h4>
      <ol style={{maxWidth: '25rem', margin: '0 auto'}}>
        {words?.map((word, i) => {
          return <li key={i} style={{fontSize: '1.35rem', color: 'var(--coffee)', listStyleType: 'none', display: 'inline-block', paddingRight: 30}}>{word}</li>
        })}
      </ol>
    </div>
  );
};

export default SynonymList;