import "../../public/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
// import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Top from "../navigation/Top";
import Footer from "../navigation/Footer";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { KAKAO_KEY } from "../configs/constants";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

declare global {
  interface Window {
    Kakao: any;
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    window.Kakao.init(KAKAO_KEY);
  }, []);

  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <QueryClientProvider client={client}>
        <Top />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default MyApp;
