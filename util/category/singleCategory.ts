import { categries } from 'ts/constant';
import { CategoryBackgroundColor } from 'ts/enum';
import { INotionPost } from 'ts/interface/notion';

class SingleCategoryManager {
  private category = '';

  get categoryLetterToShow(): string {
    const str = this.category.toLowerCase();
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  }

  get categoryColorToShow(): CategoryBackgroundColor | undefined {
    const categoryColor = categries.find(
      ({ language }) => language.toLowerCase() === this.category.toLowerCase(),
    )?.color;

    if (categoryColor === undefined) {
      return CategoryBackgroundColor.DEFAULT;
    }

    return categoryColor;
  }

  constructor(category: string) {
    this.category = category;
  }
}

export default SingleCategoryManager;
