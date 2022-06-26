import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import QueryParam, { SearchKeyType } from 'util/queryParam/queryParam';

interface ISearchQuery {
  key: SearchKeyType;
  value: string;
}

const useSearchResultinfo = () => {
  const queryParam = new QueryParam();
  const router = useRouter();
  const [searchKeyValue, setSearchKeyValue] = useState<ISearchQuery | null>(null);

  const searchParamKey = useMemo(() => searchKeyValue?.key, [searchKeyValue]);
  const searchParamValue = useMemo(() => searchKeyValue?.value, [searchKeyValue]);

  useEffect(() => {
    if (!queryParam.firstKeyName) return;

    if (queryParam.hasOverTwoKey()) router.push(`/search?${queryParam.firstKeyName}=${queryParam.firstValue}`);

    setSearchKeyValueFor({ key: queryParam.firstKeyName, value: queryParam.firstValue });
  }, [queryParam.firstValue]);

  function setSearchKeyValueFor({ key, value }: ISearchQuery) {
    if (!queryParam.firstKeyName) return;
    setSearchKeyValue({ key, value });
  }

  return { searchParamKey, searchParamValue };
};

export default useSearchResultinfo;
