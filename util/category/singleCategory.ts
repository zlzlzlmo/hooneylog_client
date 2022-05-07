/* eslint-disable no-unsafe-optional-chaining */
import { CategoryBackgroundColor } from 'ts/enum';

class SingleCategoryManager {
  private category = '';

  private categories;

  constructor(category: string) {
    this.category = category;
    this.categories = [
      { language: 'typescript', color: CategoryBackgroundColor.Typescript },
      { language: 'react', color: CategoryBackgroundColor.React },
      { language: 'javascript', color: CategoryBackgroundColor.Javascript },
      { language: 'next.js', color: CategoryBackgroundColor.NextJs },
      { language: 'cms', color: CategoryBackgroundColor.CMS },
      { language: 'esbuild', color: CategoryBackgroundColor.ESBUILD },
    ];
  }

  get categoryLetterToShow(): string {
    const str = this.category?.toLowerCase();
    const result = str?.charAt(0).toUpperCase() + str?.slice(1);
    return result;
  }

  get categoryColorToShow(): CategoryBackgroundColor {
    const result = this.categories.find(
      ({ language }) => language.toLowerCase() === this.category.toLowerCase(),
    )?.color;

    if (result === undefined) {
      return CategoryBackgroundColor.DEFAULT;
    }

    return result;
  }
}

export default SingleCategoryManager;
