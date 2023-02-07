import React, { useEffect, useState, useMemo } from 'react';
import ErrorMsg from './ErrorMsg';

const ShuffleLetters = (props) => {
  let { searchWord } = props;
  if (!searchWord) {
    searchWord = 'Enter something';
  }

  const [firstLetterSet, setFirstLetterSet] = useState([]);
  const [shuffleArr, setShuffleArr] = useState([]);

  const letterShuffler = useMemo(() => {
    const newArr = firstLetterSet.map((setOfLetters) => {
      // sorts the array in a different way each time
      // may only work for numbers. Otherwise, use custom
      // sort function
      const copyLetters = [...setOfLetters];
      copyLetters.sort(() => Math.random() - 0.5);
      return copyLetters;
    });
    console.dir(newArr);
    setShuffleArr((prev) => [...prev], newArr);
  }, [firstLetterSet]);

  useEffect(() => {
    const strArr = searchWord.split('');
    setFirstLetterSet([...strArr]);
    // letterShuffler();
  }, [searchWord, letterShuffler]);

  return (
    <div>
      <h3>Shuffled Letters</h3>
      <table>
        {!searchWord && <ErrorMsg errorText={'No scrabble letters entered'} />}
        {shuffleArr && shuffleArr.map((oneArr) => oneArr)
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
