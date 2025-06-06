import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { ServerStyleSheets } from "@mui/styles";
import createEmotionCache from "../themes/createEmotionCache";
// import parse from "html-react-parser";

interface IProps {}

export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: any) {
    const materialSheet = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
    //const res = await settingService.getScripts();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props: any) {
            return materialSheet.collect(
              <App emotionCache={cache} {...props} />
            );
          },
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);

    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      //script: res?.data,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialSheet.getStyleElement(),
        ...emotionStyleTags,
      ],
    };
  }

  render() {
    // const HeadPage = this.props.script?.header ?? "";
    // const Body = this.props.script?.body ?? "";
    // const yoastHead = parse(HeadPage);
    // const yoastBody = parse(Body);

    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="user-scalable=0, width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="msapplication-TileImage" content="favicon" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
