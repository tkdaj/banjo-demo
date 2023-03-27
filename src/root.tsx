// @refresh reload
import { useAssets } from 'solid-js/web';

import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import type { StyleData } from 'solid-styled';
import { renderSheets, StyleRegistry } from 'solid-styled';

import { ThemeProvider } from '@banjo/theme';

const htmlStyles = {
  height: '100%',
};

const bodyStyles = {
  'font-size': '100%',
  'min-height': '100%',
  'font-family':
    'Gordita, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",  sans-serif',
  margin: '0',
};

export default function Root() {
  const sheets: StyleData[] = [];
  useAssets(() => renderSheets(sheets));

  return (
    <StyleRegistry styles={sheets}>
      <Html lang="en" style={htmlStyles}>
        <Head>
          <Title>Banjo Demo</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Link rel="icon" href="/favicon.png" />
        </Head>
        <Body style={bodyStyles}>
          <ThemeProvider>
            <Suspense>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </ThemeProvider>
          <Scripts />
        </Body>
      </Html>
    </StyleRegistry>
  );
}
