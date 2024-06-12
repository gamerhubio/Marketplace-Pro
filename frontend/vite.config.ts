import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return  defineConfig({
        // depending on your application, base can also be "/"
        build: { outDir: './build' },
        base: '',
        plugins: [react(), viteTsconfigPaths()],
        server: {    
            // this ensures that the browser opens upon server start
            open: true,
            // this sets a default port to 3000  
            port: 3000, 
        },
    })
}

// export default defineConfig({
//     // depending on your application, base can also be "/"
//     base: '',
//     plugins: [react(), viteTsconfigPaths()],
//     server: {    
//         // this ensures that the browser opens upon server start
//         open: true,
//         // this sets a default port to 3000  
//         port: 3000, 
//     },
// })