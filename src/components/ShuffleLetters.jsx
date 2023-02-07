import React, { useEffect, useState, useMemo } from 'react';
import ErrorMsg from './ErrorMsg';

const ShuffleLetters = (props) => {
  const { searchWord } = props;

  const [firstLetterSet, setFirstLetterSet] = useState([]);
  const [shuffleArr, setShuffleArr] = useState([]);

  useEffect(() => {
    const strArr = searchWord.split('');
    setFirstLetterSet([...strArr]);
    letterShuffler();
  }, [searchWord]);

  const letterShuffler = useMemo(() => {
    const newArr = firstLetterSet.map((setOfLetters) => {
      // sorts the array in a different way each time
      // may only work for numbers. Otherwise, use custom
      // sort function
      const newArr = setOfLetters.sorted(() => Math.random() - 0.5);
      return newArr;
    });
    console.dir(newArr);
    //setShuffleArr((prev) => [...prev], newArr);
  }, [firstLetterSet]);

  return (
    <div>
      <h3>Shuffled Letters</h3>
      <table>
        {!shuffleArr && <ErrorMsg errorText={'No scrabble letters entered'} />}
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
