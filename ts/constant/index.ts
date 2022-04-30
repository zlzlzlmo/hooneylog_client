/* eslint-disable import/prefer-default-export */
import { CategoryBackgroundColor } from 'ts/enum';

export const categries = [
  { language: 'typescript', color: CategoryBackgroundColor.Typescript },
  { language: 'react', color: CategoryBackgroundColor.React },
  { language: 'javascript', color: CategoryBackgroundColor.Javascript },
  { language: 'next.js', color: CategoryBackgroundColor.NextJs },
  { language: 'cms', color: CategoryBackgroundColor.CMS },
  { language: 'esbuild', color: CategoryBackgroundColor.ESBUILD },
] as const;

export const BACKGROUND_MAIN_IMAGE = '/images/background.webp';
