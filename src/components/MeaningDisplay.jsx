import React, {useState, useEffect} from 'react';
import ErrorMsg from './ErrorMsg';

const MeaningDisplay = (props) => {
  const {data, error} = props;

  // put this bit in custom hook later?
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!data) {
      setErrMsg('Word not found');
    }
    if (error) {
      setErrMsg(error?.message);
    }
  }, [data, error]);

  return (
    <section className='card'>
      <h3 style={{textAlign: 'center', fontFamily: 'var(--body-font)'}}>
        {data[0]?.word[0].toUpperCase() + data[0]?.word.slice(1)} 
      </h3>
      <div style={{minWidth: '90%', maxWidth: '900px', margin: '2rem auto'}}>
        <p>{data[0]?.origin}</p>
        {error?.message && <ErrorMsg errorText={errMsg} />}
      </div>
    </section>
  );
};

export default MeaningDisplay;