/* eslint-disable no-shadow */
export type Category = 'typescript' | 'react' | 'javascript' | 'next.js';
export enum CategoryBackgroundColor {
  Typescript = '#2661B9',
  React = '#50C9EF',
  Javascript = '#EBD217',
  NextJs = '#171D21',
}
interface ICategory {
  language: Category;
  color: CategoryBackgroundColor;
}

export const categries: ICategory[] = [
  { language: 'typescript', color: CategoryBackgroundColor.Typescript },
  { language: 'react', color: CategoryBackgroundColor.React },
  { language: 'javascript', color: CategoryBackgroundColor.Javascript },
  { language: 'next.js', color: CategoryBackgroundColor.NextJs },
];

// typescript - #2661B9
// react - #50C9EF
// javascript - #EBD217
// next.js - #171D21
