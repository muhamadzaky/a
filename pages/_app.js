import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    </AuthProvider>
  );
}

export default MyApp;
