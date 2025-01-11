import '../styles/globals.scss'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return <Component {...pageProps} />;
}