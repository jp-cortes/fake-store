import AppContext from 'context/AppContext';
import Script from 'next/script';
import useInitialState from 'hooks/useInitialState';
import Header from '@components/Header';
import '../styles/global.css';



export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
  <AppContext.Provider value={initialState}>
    {/* <!-- Google tag (gtag.js) --> */}
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-DPPFTCRP6N" strategy="afterInteractive"/>
    <Script id="google-analitycs" strategy="afterInteractive">
      {` 
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-DPPFTCRP6N');
         `}
    </Script>
    <Header/>
    <Component {...pageProps} />
  </AppContext.Provider>
  
  );
}
