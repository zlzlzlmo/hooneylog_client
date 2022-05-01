import { INotionPost } from 'ts/interface/notion';

type ReduceReturnType = Record<string, number>;

class MultipleCategoryManager {
  private readonly notionList: INotionPost[] = [];

  private get countEachCategory() {
    const result = this.notionList.reduce<ReduceReturnType>((acc, { properties }) => {
      const { name } = properties.category.multi_select[0];
      return { ...acc, [name]: acc[name] ? acc[name] + 1 : 1 };
    }, {});

    return result;
  }

  get sortedCountCategoryList() {
    const result = Object.entries(this.countEachCategory).sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    return result;
  }

  constructor(notionList: INotionPost[]) {
    this.notionList = notionList;
  }
}

export default MultipleCategoryManager;
