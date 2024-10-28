/// <reference types="vite/client" />

// https://vitejs.dev/guide/env-and-mode#intellisense-for-typescript

interface ImportMetaEnv {
    readonly VITE_MMS_API_URL: string
    readonly VITE_MMS_API_JSON_PATH: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}
