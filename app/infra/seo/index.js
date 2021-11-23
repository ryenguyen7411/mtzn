import React from 'react';
import { MAX_SEO_DESCRIPTION_LENGTH } from 'utils/constants';
import { plains } from 'utils/normalize';

export const SEOTYPE = {
  HOMEPAGE: Symbol('home'),
  ABOUTPAGE: Symbol('about'),
};

const METADATA_BASE = {
  type: 'website',
  title: 'Metazoon',
};

function getMetadataHandler (symbol) {
  switch (symbol) {
    case SEOTYPE.HOMEPAGE:
      return getMetadataHomePage;
    case SEOTYPE.ABOUTPAGE:
      return getMetadataAboutPage;
    default:
      return null;
  }
}

function getMetadataHomePage () {
  return {
    title: 'Homepage - ' + METADATA_BASE.title,
  };
}

function getMetadataAboutPage () {
  return {
    title: 'About - ' + METADATA_BASE.title,
  };
}

export function getMetadataInfo (symbol, data) {
  const handler = getMetadataHandler(symbol);
  if (!handler) return METADATA_BASE;

  return { ...METADATA_BASE, ...handler(data) };
}

export function getMetadata (symbol, data) {
  const metaInfo = getMetadataInfo(symbol, data);

  const title = plains(metaInfo.title);
  const description = plains(metaInfo.description);
  const keywords = plains(metaInfo.keywords);

  const {
    image, imageWidth, imageHeight, ogUrl,
    iosUrl, iosName, iosStoreId,
    androidUrl, androidName, androidPackage,
    type, siteName, appId, nofollow,
  } = metaInfo;

  const metadata = (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description.slice(0, MAX_SEO_DESCRIPTION_LENGTH)} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}

      {iosUrl && <meta property="al:ios:url" content={iosUrl} />}
      {iosName && <meta property="al:ios:app_name" content={iosName} />}
      {iosStoreId && <meta property="al:ios:app_store_id" content={iosStoreId} />}
      {androidUrl && <meta property="al:android:url" content={androidUrl} />}
      {androidName && <meta property="al:android:app_name" content={androidName} />}
      {androidPackage && <meta property="al:android:package" content={androidPackage} />}

      {type && <meta property="og:type" content={type} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {appId && <meta property="fb:app_id" content={appId} />}

      {nofollow
        ? <meta name="robots" content="noindex" />
        : <meta name="robots" content="index,follow" />}
    </>
  );

  return metadata;
}

export { default as Head } from 'next/head';
