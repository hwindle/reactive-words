import React, { useEffect, useState, useMemo } from 'react';
import ErrorMsg from './ErrorMsg';

const ShuffleLetters = (props) => {
  const { searchWord } = props;

  const [firstLetterSet, setFirstLetterSet] = useState([]);
  const [shuffleArr, setShuffleArr] = useState([]);

  useEffect(() => {
    const strArr = searchWord.split('');
    setFirstLetterSet([...strArr]);
    savedShuffles();
  }, [searchWord]);

  const letterShuffler = () => {
    const newArr = firstLetterSet.map((setOfLetters) => {
      const newArr = setOfLetters.sorted(() => Math.random() - 0.5);
      return newArr;
    });
    setShuffleArr((prev) => [...prev], newArr);
  };

  const savedShuffles = useMemo(() => {
    letterShuffler();
  }, [searchWord]);

  return (
    <div>
      <h3>Shuffled Letters</h3>
      <table>
        {!shuffleArr ? <ErrorMsg errorText={'No scrabble letters entered'} /> : ''}
        {shuffleArr && shuffleArr
          .forEach((oneArr) => oneArr)
          .map((letter, i) => (
            <tr>
              <td key={i}>{letter}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ShuffleLetters;
