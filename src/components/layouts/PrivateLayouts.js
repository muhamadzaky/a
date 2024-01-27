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
  isDesktop,
  className,
  scrolledNav,
  withLogo,
  headerClassName
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
        <meta name="twitter:url" content="https://m-zaky.site/" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@zakysteinfeld" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Muhamad Zaky" />
        <meta property="og:url" content="https://m-zaky.site/" />
        <meta property="og:image" content="/assets/images/logo.png" />

        <meta name="application-name" content="Muhamad Zaky" />
        <meta name="description" content={metaDescription} />
      </Head>

      <main className={className ? className : ''}>
        {hasNavbar && (
          <Header isDesktop={isDesktop} scrolledNav={scrolledNav} withLogo={withLogo} className={headerClassName} />
        )}
        {children}
      </main>

      {hasFooter && <Footer isDesktop={isDesktop} />}
    </>
  );
};

export default PrivateLayout;
