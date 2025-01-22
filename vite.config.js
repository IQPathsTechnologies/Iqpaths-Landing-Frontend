import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://iqpath-landing-backend.onrender.com', 
        // target: 'http://latestbackend.iqpaths.com', 
        target: 'https://quiz.iqpaths.com', 
        changeOrigin: true,
        secure: false,
      },
      // '/api': "https://iqpath-landing-backend.onrender.com"
    },
  },
});



// ye vercel.json ka 
// "destination": "https://iqpath-landing-backend.onrender.com/api/:path*"
// "destination": "https://iqpath-landing-backend.onrender.com/api/:path*"


//ye verce.jscon me main vala bacckend hai 
  // "destination": "https://quiz.iqpaths.com/api/:path*"