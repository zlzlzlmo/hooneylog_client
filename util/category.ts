import { categries } from 'ts/constant';

class CategoryManager {
  private category = '';

  get categoryLetterToShow() {
    const str = this.category.toLowerCase();
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  }

  get categoryColorToShow() {
    const categoryColor = categries.find(
      ({ language }) => language.toLowerCase() === this.category.toLowerCase(),
    )?.color;

    return categoryColor;
  }

  constructor(category: string) {
    this.category = category;
  }
}

export default CategoryManager;
