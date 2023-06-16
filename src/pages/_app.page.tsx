import { type ReactElement, type ReactNode, useState } from 'react';
import { type NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { css, type Theme, ThemeProvider } from '@emotion/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { domMax, LazyMotion } from 'framer-motion';

import AuthProvider from '~/components/auth/AuthProvider';
import ErrorBoundary from '~/components/error/ErrorBoundary';
import MonitoringInitializer from '~/components/monitoring/MonitoringInitializer';
import ToastWrapper from '~/components/toast/ToastWrapper';
import GlobalStyles from '~/styles/GlobalStyle';
import defaultTheme from '~/styles/theme';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <SessionProvider session={pageProps.session}>
      <MonitoringInitializer />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={defaultTheme}>
            <LazyMotion features={domMax}>
              <GlobalStyles />
              <ErrorBoundary>
                <AuthProvider>
                  <div css={defaultLayoutCss}>
                    {getLayout(<Component {...pageProps} />)}
                    <ToastWrapper />
                  </div>
                </AuthProvider>
              </ErrorBoundary>
            </LazyMotion>
          </ThemeProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

const defaultLayoutCss = (theme: Theme) => css`
  width: 100%;
  max-width: ${theme.size.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`;
