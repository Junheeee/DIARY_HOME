/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { GOOGLE_CLIENT_ID } from '../configs/constants';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta
            name='google-signin-client_id'
            content={GOOGLE_CLIENT_ID}
          ></meta>
          <meta name='google-signin-scope' content='profile email'></meta>
          <script src='https://accounts.google.com/gsi/client' async></script>
          <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
