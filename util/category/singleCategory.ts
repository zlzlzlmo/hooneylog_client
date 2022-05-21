/* eslint-disable class-methods-use-this */
/* eslint-disable no-unsafe-optional-chaining */
import { ALL_LOWER_CASE } from 'ts/constant';
import { CategoryBackgroundColor } from 'ts/enum';

class SingleCategoryManager {
  private category = '';

  private readonly categories;

  constructor(category?: string) {
    if (category) this.category = category;

    this.categories = ['알고리즘', 'nextjs', 'nestjs', 'react', 'javascript', 'typescript'];
  }

  get categoryLetterToShow(): string {
    const strLowerCase = this.category?.toLowerCase();
    return strLowerCase?.charAt(0).toUpperCase() + strLowerCase?.slice(1);
  }

  get categorySearchParam(): string {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('category') ?? ALL_LOWER_CASE;
    }

    return ALL_LOWER_CASE;
  }

  get categoryImageSrc() {
    let category = this.category.toLowerCase().replaceAll('.', '');
    if (!this.categories.includes(category)) {
      category = 'default.avif';
    } else {
      category = `${category}.png`;
    }

    const result = `/images/${category}`;
    return result;
  }
}

export default SingleCategoryManager;
