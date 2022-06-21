type ReduceReturnType = Record<string, number>;

class Category {
  constructor(private readonly categoryList: string[]) {}

  get objectWithCount(): ReduceReturnType {
    const result = this.categoryList.reduce<ReduceReturnType>((total, category) => {
      return { ...total, [category]: total[category] ? total[category] + 1 : 1 };
    }, {});

    return result;
  }

  get orderedListByDescending(): [string, number][] {
    const result = Object.entries(this.objectWithCount).sort((a, b) => {
      const countInDescending = b[1] - a[1];
      const textInAscending = a[0].localeCompare(b[0]);

      if (a[0] === '기타') return 1;
      if (b[0] === '기타') return -1;

      return countInDescending || textInAscending;
    });

    return result;
  }
}

export default Category;
