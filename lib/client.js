import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'u9ylhy6r',
  dataset: 'production',
  apiVersion: '2024-05-06',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const imageBuilder = imageUrlBuilder(client);
 export const urlFor = (source) => imageBuilder.image(source);
// export const urlFor = (source) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url()
// }