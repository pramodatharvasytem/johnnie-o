import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'clutchbright.myshopify.com',
    storefrontToken: 'a3aeb3f0537670a63931365b36dacd5d',
    storefrontApiVersion: '2022-07',
    // @ts-ignore
    //storefrontId: '130519302340',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
