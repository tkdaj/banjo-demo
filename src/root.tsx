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
import { css, renderSheets, StyleRegistry } from 'solid-styled';

import { ThemeProvider } from '@banjo/theme';

export function GlobalStyles() {
  css`
    @global {
      /* default to 100% of the browser's default font size (16px). We'll use this as a base for our rem units. */
      font-size: 100%;

      html,
      body {
        margin: 0;
      }

      body {
        font-family: Gordita, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
      }

      /* make smaller text for smaller devices */

      @media all and (max-width: 600px) {
        html {
          font-size: 75%;
        }
      }
    }
  `;

  return null;
}

export default function Root() {
  const sheets: StyleData[] = [];
  useAssets(() => renderSheets(sheets));

  return (
    <StyleRegistry styles={sheets}>
      <Html lang="en">
        <Head>
          <Title>Banjo Demo</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Link rel="icon" href="/favicon.png" />
        </Head>
        <Body>
          <ThemeProvider>
            <GlobalStyles />
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
