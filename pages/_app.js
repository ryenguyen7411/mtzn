import { getMetadata, Head } from 'infra/seo';
import App from 'presentations/index';
import Provider from 'presentations/provider';
import 'presentations/styles/index.scss';
import React from 'react';

export default function RootApp ({ Component, pageProps }) {
  return (
    <Provider>
      <Head>{getMetadata()}</Head>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
}
