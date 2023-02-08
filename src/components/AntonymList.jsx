import React from 'react';

const AntonymList = (props) => {
  let words = props.antonyms;
  if (words === undefined) {
    words = { error: 'No search word entered'};
  }

  return (
    <div>
      <h4 style={{marginTop: 35, lineHeight: 2, textAlign: 'center', fontFamily: 'var(--body-font)', color: 'var(--orange)'}}>Dissimilar Words</h4>
      <ul style={{maxWidth: '30rem', margin: '0 auto'}}>
        {words?.map((word, i) => {
          return <li key={i} style={{fontSize: '1.2rem', color: 'var(--coffee)', listStyleType: 'none', textAlign: 'center'}}>{word}</li>
        })}
      </ul>
    </div>
  );
};

export default AntonymList;