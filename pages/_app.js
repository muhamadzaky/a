import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import amplitude from 'amplitude-js';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(process.env.AMPLITUDE_KEY, process.env.APP_MODE);
    amplitude.getInstance().init(process.env.AMPLITUDE_KEY);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
