import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'e5m09ops',
  dataset: 'production',
});

export default client;
