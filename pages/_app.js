import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Analytics } from '@vercel/analytics/react';
import amplitude from 'amplitude-js';
import { useEffect } from 'react';
import { AuthProvider } from 'src/context/auth';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Analytics />
    </AuthProvider>
  );
}

export default MyApp;
