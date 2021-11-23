import { getMetadata, Head, SEOTYPE } from 'infra/seo';
import AboutPage from 'presentations/views/about';
import React from 'react';

export default function Home () {
  return (
    <>
      <Head>{getMetadata(SEOTYPE.ABOUTPAGE)}</Head>
      <AboutPage />
    </>
  );
}
