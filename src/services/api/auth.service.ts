import api from "../remote/baseApi";
import ApiEndpoints from "../remote/apiEndpoints";
import { envConfig } from "../../configs/env.config";
import { ILoginRequest, ILoginResponse } from "../../models/auth";

const API_AUTH = ApiEndpoints.AUTH;
const baseURL = envConfig.API_ENDPOINT;

const loginWithPassword = (login: ILoginRequest) => {
  return api.post<ILoginRequest, ILoginResponse>(
    baseURL,
    API_AUTH.LOGIN_WITH_PASSWORD.url,
    login
  );
};

const adminLoginWithPassword = (login: ILoginRequest) => {
  return api.post<ILoginRequest, ILoginResponse>(
    baseURL,
    API_AUTH.ADMIN_LOGIN_WITH_PASSWORD.url,
    login
  );
};

const logout = () => {
  return api.post<null, boolean>(baseURL, API_AUTH.LOGOUT.url);
};

const refetchToken = () => {
  return api.post<
    null,
    {
      accessToken: string;
    }
  >(baseURL, `/auth/refetch-token`);
};

const AuthService = {
  loginWithPassword,
  adminLoginWithPassword,
  logout,
  refetchToken,
};

export default AuthService;
