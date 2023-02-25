import { useEffect, useState } from 'react';
import { getData } from '../service/apiService';
import { ApiResponse } from '../interface/apiResponse';

export const useApi = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    hasError: false,
    message: '',
  });

  const getNews = async () => {
    try {
      const response = await getData(`https://my-json-server.typicode.com/DH-Esp-Frontend/ctd-esp-front2-aula6-mesa3-main/posts`)
      setData(response);
      setError({ hasError: false, message: '' });
    } catch (error) {
      setError({ hasError: true, message: `Error: ${(error as Error).message}` });
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return { data, loading, error };

}