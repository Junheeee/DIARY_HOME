import { useEffect, useRef } from 'react';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../assets/styles/custom.css';

const sections = [
  { title: 'list', url: '#' },
  { title: 'bombGame', url: '#' },
  { title: 'validation', url: '#' },
  { title: 'kakao', url: '#' },
  { title: 'paging', url: '#' },
  { title: 'fish', url: '#' },
  { title: 'girl', url: '#' },
  { title: 'hope', url: '#' },
  { title: 'import', url: '#' },
  { title: 'july', url: '#' }
];

const theme = createTheme();

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg' style={{ paddingTop: '20px' }}>
          <Header title='DIARY' sections={sections} />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
};

export default MyApp;
