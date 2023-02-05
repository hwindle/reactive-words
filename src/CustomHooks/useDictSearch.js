import { useState, useEffect } from 'react';
import axios from 'axios';

const useDictSearch = (url) => {
  console.log(url);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  // updates on url parameter change
  useEffect(() => {
    // an IIFE immediately invoked function expression
    // that is used to isolate variable scope and for async keyword
    (async function() {
      const headers = { headers: 
        { Authorization: `${process.env.REACT_APP_OWL_DICT_API_KEY}` } 
      };
      try {
        // set a progress bar or loading thing here
        const response = await axios.get(url, headers);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error from Owl - Axios', error);
        setError(error);
      } finally {
        // set loading bit to false
      }
    })();
  }, [url]);

  return { data, error };
};

export default useDictSearch;