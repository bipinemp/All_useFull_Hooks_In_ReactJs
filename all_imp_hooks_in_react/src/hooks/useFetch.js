import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data.content))
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const reFetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data.content))
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, data, error, reFetch };
}
