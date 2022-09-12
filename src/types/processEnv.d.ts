export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      DATABASE_URL: string;
      CRYPTR_KEY: string;
      SECRET_TOKEN: string;
    }
  }
}