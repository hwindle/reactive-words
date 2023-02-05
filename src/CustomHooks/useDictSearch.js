import { useState, useEffect } from 'react';
import axios from 'axios';

const useDictSearch = (baseUrl, word) => {
  //console.log(url);
  const url = baseUrl + word;
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  // updates on url parameter change
  useEffect(() => {
    // an IIFE immediately invoked function expression
    // that is used to isolate variable scope and for async keyword
    (async function() {
      try {
        // set a progress bar or loading thing here
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error from dict - Axios', error);
        setData([{word: 'Word not found'}]);
        setError(error);
      } finally {
        // set loading bit to false
      }
    })();
  }, [url, word]);

  return { data, error };
};

export default useDictSearch;