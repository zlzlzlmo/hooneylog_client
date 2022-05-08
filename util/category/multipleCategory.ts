import { INotionPost } from 'ts/interface/notion';

type ReduceReturnType = Record<string, number>;

class MultipleCategoryManager {
  private readonly notionList: INotionPost[] = [];

  constructor(notionList: INotionPost[]) {
    this.notionList = notionList;
  }

  private get countEachCategory(): ReduceReturnType {
    const result = this.notionList.reduce<ReduceReturnType>((acc, { properties }) => {
      const { name } = properties.category.multi_select[0];
      return { ...acc, [name]: acc[name] ? acc[name] + 1 : 1 };
    }, {});

    return result;
  }

  get sortedCountCategoryList(): [string, number][] {
    return Object.entries(this.countEachCategory).sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
  }
}

export default MultipleCategoryManager;
