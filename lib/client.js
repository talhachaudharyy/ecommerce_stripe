import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';


export const client = sanityClient({
  projectId: '8xl83ors',
  dataset: 'production',
  apiVersion: '2023-09-05',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);