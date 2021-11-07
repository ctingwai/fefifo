import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import { useRouter } from 'next/router';

// MUI components
import createEmotionCache from '../src/styles/createEmotionCache';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Custom sidebar
import SidebarNav from '../src/components/SidebarNav';

// Config
import config from '../src/libs/config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const routeConf = config.routes.find((r) => router.pathname === r.pathname);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Fefifo</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${process.env.sidebarWidth}px)`, ml: `${process.env.sidebarWidth}px` }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                {routeConf.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <SidebarNav pathname={router.pathname} />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Component {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
