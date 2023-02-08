import React, { useEffect, useState, useMemo } from 'react';
import ErrorMsg from './ErrorMsg';

const ShuffleLetters = (props) => {
  let { searchWord } = props;
  // if (!searchWord) {
  //   searchWord = 'Enter something';
  // }

  const [firstLetterSet, setFirstLetterSet] = useState([]);
  const [shuffleArr, setShuffleArr] = useState([]);

  const letterShuffler = useMemo(() => {
    firstLetterSet.forEach((setOfLetters) => {
      // sorts the array in a different way each time
      // may only work for numbers. Otherwise, use custom
      // sort function
      let two2Array = [];
      for (let i = 0; i < setOfLetters.length; i++) {
        const copyLetters = [...setOfLetters];
        copyLetters.sort(() => Math.random() - 0.5);
        console.dir(copyLetters);
        two2Array.push(copyLetters);
        setShuffleArr(two2Array);
        console.dir('shuffle', shuffleArr);
      }
    });
  }, [firstLetterSet]);

  useEffect(() => {
    const strArr = searchWord.split();
    setFirstLetterSet([...strArr]);
    // letterShuffler();
  }, [searchWord, letterShuffler]);

  return (
    <div>
      <h3>Shuffled Letters</h3>
      <table id="scrabble-letter-array">
        {!searchWord && <ErrorMsg errorText={'No scrabble letters entered'} />}
        {shuffleArr && shuffleArr.map(oneArr => oneArr)
          .map((letter, i) => (
            <tr>
              <td key={i} className='scrabble-mixed-up'>{letter}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ShuffleLetters;
