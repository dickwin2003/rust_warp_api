import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    host: true, // 监听所有地址，包括 LAN 和公共地址
    port: 5173, // 默认端口
    strictPort: true, // 如果端口被占用则中止
    cors: true, // 启用 CORS
  },
  css: {
    devSourcemap: true, // 启用 CSS sourcemaps
  },
});
