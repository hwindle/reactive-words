import React from 'react';

const AntonymList = (props) => {
  const [words] = props.antonyms;

  return (
    <div>
      <h4>Dissimilar Words</h4>
      <ul>
        {words.map((word, i) => {
          return <li key={i}>{word}</li>
        })}
      </ul>
    </div>
  );
};

export default AntonymList;