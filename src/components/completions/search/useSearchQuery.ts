/* eslint-disable no-use-before-define */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QueryParam, { SearchKeyType } from 'util/queryParam/queryParam';

interface ISearchQuery {
  key: SearchKeyType;
  value: string;
}

const useSearchQuery = () => {
  const router = useRouter();
  const [searchKeyValue, setSearchKeyValue] = useState<ISearchQuery | null>(null);
  const [isValidSearchKey, setIsValidSearchKey] = useState<boolean>(true);

  useEffect(() => {
    const queryParam = new QueryParam();
    const notAllowedSearchKey = !queryParam.firstKeyName;

    if (notAllowedSearchKey) {
      setIsValidSearchKey(false);
      return;
    }

    setSearchInfoFor(queryParam);
  }, []);

  function setSearchInfoFor(queryParam: QueryParam) {
    const newKeyValue: ISearchQuery = {
      key: queryParam.firstKeyName,
      value: queryParam.firstValue,
    };

    setSearchKeyValue(newKeyValue);
    router.push(`/search?${newKeyValue.key}=${newKeyValue.value}`);
  }

  return { isValidSearchKey, searchKeyValue };
};

export default useSearchQuery;
