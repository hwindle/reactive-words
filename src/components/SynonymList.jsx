import React from 'react';

const SynonymList = (props) => {
  let words = props.synWords;
  if (words === undefined) {
    words = { error: 'No search word entered'};
  }

  return (
    <div>
      <h4>Similar Words</h4>
      <ol>
        {Object.values(words).map((word, i) => {
          return <li key={i}>{word}</li>
        })}
      </ol>
    </div>
  );
};

export default SynonymList;