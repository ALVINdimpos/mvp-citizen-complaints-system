export const environment = {
  apiUrl:
    import.meta.env.VITE_API_URL ||
    "https://mvp-citizen-complaints-system-xunk.vercel.app/api",
  storageEncryptionKey:
    import.meta.env.VITE_STORAGE_ENCRYPTION_KEY || "complaints",
};
