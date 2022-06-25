import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import QueryParam, { SearchKeyType } from 'util/queryParam/queryParam';

interface ISearchQuery {
  key: SearchKeyType;
  value: string;
}

const useSearchQuery = () => {
  const queryParam = new QueryParam();
  const router = useRouter();
  const [searchKeyValue, setSearchKeyValue] = useState<ISearchQuery | null>(null);

  const searchParamKey = useMemo(() => searchKeyValue?.key, [router.query]);
  const searchParamValue = useMemo(() => searchKeyValue?.value, [router.query]);

  useEffect(() => {
    setSearchKeyValueFor(queryParam);
  }, []);

  function setSearchKeyValueFor(queryParam: QueryParam) {
    if (!queryParam.firstKeyName) return;
    const newKeyValue: ISearchQuery = {
      key: queryParam.firstKeyName,
      value: queryParam.firstValue,
    };

    setSearchKeyValue(newKeyValue);
    router.push(`/search?${newKeyValue.key}=${newKeyValue.value}`);
  }

  return { searchParamKey, searchParamValue };
};

export default useSearchQuery;
