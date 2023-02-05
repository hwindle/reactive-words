import { useState, useEffect } from 'react';
import axios from 'axios';

const useThesaurus = (url) => {
  // console.log(url);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // updates on url searchword GET parameter change
  useEffect(() => {
    (async function() {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error from thes (Merriam W) - Axios', error);
        //setData([{word: 'Word not found'}]);
        setError(error);
      } finally {
        // set loading bit to false
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useThesaurus;