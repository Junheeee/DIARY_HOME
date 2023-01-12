import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/fix/Footer";
import Top from "../src/component/fix/Top";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <SessionProvider session={session}>
        <Top />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default MyApp;
