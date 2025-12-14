import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react' ;  // ← this was missing
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname} from 'path';
import { fileURLToPath } from 'url';

// ./ ../components/someting
//@componnents/component

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: { 
      
        '#components': '/src/components',
    '#constants': '/src/constants',
    '#store': '/src/store',
    '#hoc': '/src/hoc',
    '#windows': '/src/windows',
    },
  },
});