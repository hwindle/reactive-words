import React from 'react';

const SynonymList = (props) => {
  const words = props.synWords;
  if (words === []) {
    words = ['No search word entered'];
  }

  return (
    <div>
      <h4>Similar Words</h4>
      <ol>
        {words?.map((word, i) => {
          return <li key={i}>{word}</li>
        })}
      </ol>
    </div>
  );
};

export default SynonymList;