/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient, createCurrentUserHook } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source: SanityImageSource) => imageUrlBuilder(sanityClient).image(source);

export const useCurrentUser = createCurrentUserHook({ projectId: config.projectId!, dataset: config.dataset });
