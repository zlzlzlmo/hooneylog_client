/* eslint-disable no-unsafe-optional-chaining */
import { CategoryBackgroundColor } from 'ts/enum';

class SingleCategoryManager {
  private category = '';

  private categoriesColorSet;

  private categoriesImageSet;

  constructor(category?: string) {
    if (category) this.category = category;

    this.categoriesColorSet = [
      { language: 'typescript', color: CategoryBackgroundColor.Typescript },
      { language: 'react', color: CategoryBackgroundColor.React },
      { language: 'javascript', color: CategoryBackgroundColor.Javascript },
      { language: 'next.js', color: CategoryBackgroundColor.NextJs },
      { language: 'cms', color: CategoryBackgroundColor.CMS },
      { language: 'esbuild', color: CategoryBackgroundColor.ESBUILD },
    ];

    this.categoriesImageSet = ['알고리즘', 'nextjs', 'nestjs', 'react', 'javascript', 'typescript'];
  }

  get categoryLetterToShow(): string {
    const strLowerCase = this.category?.toLowerCase();
    return strLowerCase?.charAt(0).toUpperCase() + strLowerCase?.slice(1);
  }

  get categoryColorToShow(): CategoryBackgroundColor {
    const result = this.categoriesColorSet.find(
      ({ language }) => language.toLowerCase() === this.category.toLowerCase(),
    )?.color;

    if (result === undefined) {
      return CategoryBackgroundColor.DEFAULT;
    }

    return result;
  }

  get categoryImageSrc() {
    let category = this.category.toLowerCase().replace(/ /gi, '');
    if (!this.categoriesImageSet.includes(category)) {
      category = 'default.avif';
    } else {
      category = `${category}.png`;
    }

    const result = `/images/${category}`;
    return result;
  }
}

export default SingleCategoryManager;
