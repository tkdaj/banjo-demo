import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStyled from "vite-plugin-solid-styled";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solid({ ssr: false }),
    solidStyled({
      filter: {
        include: "src/**/*.tsx",
        exclude: "node_modules/**/*.{ts,js}",
      },
    }),
  ],
  base: '/banjo-demo/',
  server: {
    port: 3000,
    open: true,
  }
});

