import React, { useEffect } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "../themes/global-fonts.css";
import "../i18n/i18n";
import App, { AppContext } from "next/app";
import { NextComponentType } from "next";
import createEmotionCache from "../themes/createEmotionCache";
import ThemeConfig from "../themes";

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  Component: typeof React.Component;
  pageProps: object;
  emotionCache: EmotionCache;
}

const MyApp: NextComponentType<AppContext, any, AppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentNode?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeConfig>
        <Component {...pageProps} />
      </ThemeConfig>
    </CacheProvider>
  );
};

// Add getInitialProps to load pageProps
MyApp.getInitialProps = async (appContext: AppContext) => {
  let appProps = { pageProps: {} };

  if (typeof App.getInitialProps === "function") {
    appProps = await App.getInitialProps(appContext);
  }

  try {
    // Merge and return pageProps
    return {
      ...appProps,
      pageProps: {
        ...appProps.pageProps,
      },
    };
  } catch (ex) {
    return {
      ...appProps,
      pageProps: {
        ...appProps.pageProps,
      },
    };
  }
};

export default MyApp;
