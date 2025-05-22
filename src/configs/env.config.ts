export interface ENV {
  NODE_ENV: string;
  API_ENDPOINT: string;
  FILE_ENDPOINT: string;
  X_AUTHKEY: string;
  DOMAIN: string;
}

export const envConfig: ENV = {
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV ?? "",
  FILE_ENDPOINT: process.env.NEXT_PUBLIC_FILE_ENDPOINT ?? "",
  API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT ?? "",
  X_AUTHKEY: process.env.NEXT_PUBLIC_X_AUTHKEY ?? "",
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN ?? "",
};
