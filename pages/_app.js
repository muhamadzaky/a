import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'dayjs/locale/en';
import 'dayjs/locale/id';
import 'dayjs/locale/ja';

import { Analytics } from '@vercel/analytics/react';
import amplitude from 'amplitude-js';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthProvider } from 'src/context/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);
    dayjs.locale(locale ?? 'en');
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Analytics />
    </AuthProvider>
  );
}

export default MyApp;
