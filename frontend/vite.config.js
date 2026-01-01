import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic' // Add this line
  }), viteTsconfigPaths(), svgrPlugin(
    {  
      svgrOptions: {
      ref: true,
    }
  },
  )],

  resolve: {
    alias: {
      src: "/src",
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },

  },

  // server:{
  //   host:"192.168.1.5",
  //   port: 2002,
  // }


});
