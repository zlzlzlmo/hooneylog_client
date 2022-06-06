import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API from 'util/api/api';
import APIBuilder from 'util/api/builder';

const useApi = <T>(url: string, body?: object) => {
  const [data, setData] = useState<T | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log('useApi');
    let api: API;
    if (!body) {
      api = new APIBuilder('GET', url).build();
    } else {
      api = new APIBuilder('POST', url).setBody(body).build();
    }

    api.fetch().then((res) => {
      setData(res);
    });
  }, [router.query.slug]);

  return { data };
};

export default useApi;
