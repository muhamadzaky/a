import { t } from '@utils/t';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Header from './Header';

const PrivateLayout = ({
  children,
  hasNavbar = true,
  hasFooter = true,
  title = 'Muhamad Zaky',
  isMobile,
  className
}) => {
  const router = useRouter();
  const { meta } = t[router.locale];

  const metaTitle = meta ? meta.title : 'Muhamad Zaky';
  const metaDescription = meta ? meta.content : "Muhamad Zaky's Portfolio!";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/assets/logo/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/assets/logo/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />

        <meta name={metaTitle} content={metaDescription} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://apps-muhamadzaky.vercel.app/" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@zakysteinfeld" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Muhamad Zaky" />
        <meta property="og:url" content="https://apps-muhamadzaky.vercel.app/" />

        <meta name="application-name" content="Muhamad Zaky" />
        <meta name="description" content={metaDescription} />
      </Head>

      <main className={className ? className : ''}>
        {hasNavbar && <Header isMobile={isMobile} />}
        {children}
      </main>

      {hasFooter && <Footer isMobile={isMobile} />}
    </>
  );
};

export default PrivateLayout;
