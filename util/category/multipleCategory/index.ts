type ReduceReturnType = Record<string, number>;

class MultipleCategoryManager {
  private readonly categoryNameList: string[] = [];

  private readonly lowestPriorityWord = '기타';

  constructor(categoryNameList: string[]) {
    this.categoryNameList = categoryNameList;
  }

  private get countEachCategory(): ReduceReturnType {
    const result = this.categoryNameList.reduce<ReduceReturnType>((acc, name) => {
      return { ...acc, [name]: acc[name] ? acc[name] + 1 : 1 };
    }, {});

    return result;
  }

  get sortedCountCategoryList(): [string, number][] {
    return Object.entries(this.countEachCategory).sort((a, b) => {
      if (a[0] === this.lowestPriorityWord) {
        return 1;
      }
      if (b[0] === this.lowestPriorityWord) {
        return -1;
      }
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
  }
}

export default MultipleCategoryManager;