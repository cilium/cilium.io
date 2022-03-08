import { useEffect } from 'react';

export default function useFetchAddEvent(url, setData) {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setData(null);
        console.log(err.message);
      }
    };
    getData();
  }, [setData, url]);
}
