import { NotionPost } from 'api/notion/notionApi';
import { useEffect, useState } from 'react';
import CategoryCommand from 'util/filterByQueryParam/command/categoryCommand';
import SearchCommand from 'util/filterByQueryParam/command/searchCommand';
import TagCommand from 'util/filterByQueryParam/command/tagCommand';
import FilterByQueryParam from 'util/filterByQueryParam/filterByQueryParam';
import QueryParam from 'util/queryParam/queryParam';

const useFilterByQueryParam = (notionList: NotionPost[]) => {
  const filter = new FilterByQueryParam(notionList);
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
    setNotionListToShow(newNotionList);
  }, [query.firstValue]);

  return { notionListToShow };
};

export default useFilterByQueryParam;
