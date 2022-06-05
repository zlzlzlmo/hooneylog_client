/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */

import MultipleCategoryManager from 'util/category/multipleCategory';
import SingleCategoryManager from 'util/category/singleCategory';

type CategoryType = 'single' | 'multiple';

class AbstractFactory {
  static createCategory(type: CategoryType, param: string | string[]) {
    if (type === 'single' && typeof param === 'string') {
      return new SingleCategoryManager(param);
    }

    if (type === 'multiple' && Array.isArray(param)) {
      return new MultipleCategoryManager(param);
    }

    throw new Error('Check type or param');
  }
}
export default AbstractFactory;
