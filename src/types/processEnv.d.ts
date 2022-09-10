export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE_URL: string;
      CRYPTR_KEY: string;
      SECRET_TOKEN: string;
    }
  }
}