import "../../public/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { SessionProvider } from "next-auth/react";
import Top from "../navigation/Top";
import Footer from "../navigation/Footer";

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
