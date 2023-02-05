import { useState, useEffect } from 'react';
import axios from 'axios';

const useThesaurus = (searchWord) => {
  // console.log(url);
  // data for API calls
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/`;
  const key = `?key=${process.env.REACT_APP_MW_THES_API_KEY}`;
  const url = baseUrl + searchWord + key;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response.data);
        setData(() => (response.data));
      } catch (error) {
        console.error('Error from thes (Merriam W) - Axios', error);
        //setData([{word: 'Word not found'}]);
        setError(error);
      } finally {
        // set loading bit to false
        setLoading(false);
      }
    })();
  }, [url, searchWord]);
  
  return { data, loading, error };
};

export default useThesaurus;