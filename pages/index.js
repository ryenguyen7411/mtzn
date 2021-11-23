import { getMetadata, Head, SEOTYPE } from 'infra/seo';
import HomePage from 'presentations/views/home';
import React from 'react';

export default function Home () {
  return (
    <>
      <Head>{getMetadata(SEOTYPE.HOMEPAGE)}</Head>
      <HomePage />
    </>
  );
}
