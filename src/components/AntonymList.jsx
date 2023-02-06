import React from 'react';

const AntonymList = (props) => {
  let words = props.antonyms;
  if (words === undefined) {
    words = { error: 'No search word entered'};
  }

  return (
    <div>
      <h4>Dissimilar Words</h4>
      <ul>
        {words?.map((word, i) => {
          return <li key={i}>{word}</li>
        })}
      </ul>
    </div>
  );
};

export default AntonymList;