import { useState } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest =  async (req, transformData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(req.url, {
        method: req.method || 'GET',
        body: req.body ? JSON.stringify(req.body) : null,
        headers: req.headers || {}
      });
      if (!response.ok)
        throw new Error(
          'Fail to resolve the request error: ' + response.status
        );
      const data = await response.json();
      transformData(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return { sendRequest, error, loading };
};

export default useFetch;
