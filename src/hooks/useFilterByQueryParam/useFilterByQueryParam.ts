import { NotionPost } from 'api/notion/notionApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CategoryCommand from 'util/filterByQueryParam/command/categoryCommand';
import SearchCommand from 'util/filterByQueryParam/command/searchCommand';
import TagCommand from 'util/filterByQueryParam/command/tagCommand';
import FilterCommand from 'util/filterByQueryParam/filterCommand';
import QueryParam from 'util/queryParam/queryParam';

const useFilterByQueryParam = (notionList: NotionPost[]) => {
  const router = useRouter();
  const filter = new FilterCommand(notionList);
  const query = new QueryParam();
  const [notionListToShow, setNotionListToShow] = useState<NotionPost[]>(notionList);

  const filterByCategory = () => {
    return filter.excuteCommand(new CategoryCommand());
  };

  const filterBySearch = () => {
    return filter.excuteCommand(new SearchCommand());
  };

  const filterByTag = () => {
    return filter.excuteCommand(new TagCommand());
  };

  useEffect(() => {
    let newNotionList: NotionPost[] = [];

    switch (query.firstKeyName) {
      case 'category':
        newNotionList = filterByCategory();
        break;
      case 'search':
        newNotionList = filterBySearch();
        break;
      case 'tag':
        newNotionList = filterByTag();
        break;
      default:
        newNotionList = notionListToShow;
    }

    if (newNotionList.length < 1) {
      alert('검색된 결과가 없습니다. 메인 화면으로 이동합니다.');
      router.push('/');
      return;
    }
    setNotionListToShow(newNotionList);
  }, [query.firstValue]);

  return { notionListToShow };
};

export default useFilterByQueryParam;
