import "../../public/styles/globals.css";
import Top from "../navigation/Top";
import Footer from "../navigation/Footer";
import { AppProps } from "next/app";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

declare global {
  interface Window {
    Kakao: any;
  }
}

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const theme = createTheme();

const MyApp = ({ Component, pageProps }: AppProps) => {
  // useEffect(() => {
  //   window.Kakao.init(KAKAO_KEY);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Top title="DIARY" sections={sections} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
