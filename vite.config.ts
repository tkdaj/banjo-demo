import solid from 'solid-start/vite';

// @ts-expect-error solid-start-static is experimental -- there are no types for it
import solidStatic from 'solid-start-static';
import { defineConfig } from 'vite';
import solidStyled from 'vite-plugin-solid-styled';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solid({ adapter: solidStatic() }),
    solidStyled({
      filter: {
        include: 'src/**/*.tsx',
        exclude: 'node_modules/**/*.{ts,js}',
      },
    }),
  ],
  base: '/banjo-demo',
  server: {
    port: 3000,
    open: true,
  },
});
