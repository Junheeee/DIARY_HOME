import { useEffect, useRef } from "react";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { KAKAO_KEY } from "../configs/constants";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import "../assets/css/Register.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

const sections = [
  { title: "apple", url: "#" },
  { title: "banana", url: "#" },
  { title: "candy", url: "#" },
  { title: "design", url: "#" },
  { title: "egg", url: "#" },
  { title: "fish", url: "#" },
  { title: "girl", url: "#" },
  { title: "hope", url: "#" },
  { title: "import", url: "#" },
  { title: "july", url: "#" },
];

const theme = createTheme();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(new QueryClient());

  useEffect(() => {
    window.Kakao.init(KAKAO_KEY);
  }, []);

  return (
    <QueryClientProvider client={queryClient.current}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" style={{ paddingTop: "20px" }}>
          <Header title="DIARY" sections={sections} />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default MyApp;
