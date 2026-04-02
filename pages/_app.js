import { useEffect } from 'react';
import '../themes/default/styles/globals.scss';
import '../themes/design1/styles/globals-scoped.scss';
import '../themes/design2/styles/globals-scoped.scss';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
