export const environment = {
  apiUrl:
    import.meta.env.VITE_API_URL ||
    "https://mvp-citizen-complaints-system.onrender.com/api",
  storageEncryptionKey:
    import.meta.env.VITE_STORAGE_ENCRYPTION_KEY || "complaints",
};
