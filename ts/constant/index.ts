/* eslint-disable import/prefer-default-export */
import { CategoryBackgroundColor } from 'ts/enum';
import { ICategory } from 'ts/interface/category';

export const categries: ICategory[] = [
  { language: 'typescript', color: CategoryBackgroundColor.Typescript },
  { language: 'react', color: CategoryBackgroundColor.React },
  { language: 'javascript', color: CategoryBackgroundColor.Javascript },
  { language: 'next.js', color: CategoryBackgroundColor.NextJs },
  { language: 'cms', color: CategoryBackgroundColor.CMS },
];
