import axios, { AxiosRequestConfig } from "axios";
import { envConfig } from "../../configs/env.config";
import i18n, { CountryLanguage } from "../../i18n/i18n";
import { ELanguage, ELocalStorageName } from "../../models/common/model.enum";
import { IBaseResponseModel } from "../../models/common/model.type";
import ROUTE_PATH from "../../configs/routes/path";
import { BaseResponseError } from "../../constants/api";

export enum HEADER {
  API_KEY = "x-api-key",
  AUTHORIZATION = "authorization",
  ACCEPT_LANGUAGE = "accept-language",
}

export enum Message {
  NetworkError = "Network Error",
  NetworkTimeOut = "timeout of 20000ms exceeded",
}

type ErrorResponse = {
  Error: any;
  IsResponse: boolean;
};

const baseApi = axios.create({
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

baseApi.interceptors.request.use(
  async config => {
    try {
      const lang = i18n.language;
      const token = localStorage.getItem(ELocalStorageName.UserToken);

      if (token) {
        config.headers[HEADER.AUTHORIZATION] = `Bearer ${token}`;
      }
      config.headers[HEADER.ACCEPT_LANGUAGE] =
        lang === CountryLanguage.VI ? ELanguage.Vie : ELanguage.Eng;

      config.headers[HEADER.API_KEY] = envConfig.X_AUTHKEY;

      return config;
    } catch (error: any) {
      throw new Error(error);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  async response => {
    if (response.data.statusCode === 401) {
      console.log("FORBIDDEN");

      onLogout();
    }

    return response.data;
  },
  error => {
    console.log("error: ", error);
    const errorResponse = handleDataError(error);
    handleError(errorResponse);
    return null;
  }
);

export function getAuthorizationToken() {
  return baseApi.defaults.headers.common.Authorization;
}

export function removeAuthorizationToken() {
  delete baseApi.defaults.headers.common.Authorization;
}

function handleDataError(error: any) {
  let errorResponse: ErrorResponse = {
    Error: error,
    IsResponse: false,
  };
  // Error Response
  if (error.response && error.response.data) {
    errorResponse.Error = error.response.data;
    errorResponse.IsResponse = true;
  }
  // Error Handle
  else if (error.message && error.name === "Error") {
  }

  return errorResponse;
}

const handleError = async (errorResponse: ErrorResponse) => {
  const error = errorResponse.Error;
  const isResponse = errorResponse.IsResponse;
  const { code } = error;
  let isAlert = isResponse;
  let message = error.message;

  switch (code) {
    case 500: {
      message = "Server đang có lỗi. Vui lòng thử lại sau!";
      // Handle InternalServerError
      break;
    }
    case 403: {
      message = "Bạn không có quyền thực hiện chức năng này!";
      // Handle Forbidden
      break;
    }
    case 401: {
      message = "Bạn không có quyền thực hiện chức năng này!";
      isAlert = false;
      break;
    }
    case 429: {
      // Handle TooManyRequests
      break;
    }
  }

  if (isAlert && message) {
    console.log("handle alert");
  }
};

const _request = <T = any, R = any | null>(
  baseURL: string,
  config: AxiosRequestConfig
): Promise<IBaseResponseModel<R>> => {
  return baseApi.request({ baseURL: baseURL, ...config });
};

const _get = <T = any, R = any | null>(
  baseURL: string,
  url: string,
  config?: AxiosRequestConfig
): Promise<IBaseResponseModel<R>> => {
  return baseApi.get<T, IBaseResponseModel<R>>(url, {
    baseURL: baseURL,
    ...config,
  });
};

const _post = <T = any, R = any | null>(
  baseURL: string,
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<IBaseResponseModel<R>> => {
  return baseApi.post<T, IBaseResponseModel<R>>(url, data, {
    baseURL: baseURL,
    ...config,
  });
};

const _put = <T = any, R = any | null>(
  baseURL: string,
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<IBaseResponseModel<R>> => {
  return baseApi.put<T, IBaseResponseModel<R>>(url, data, {
    baseURL: baseURL,
    ...config,
  });
};

const _delete = <T = any, R = any | null>(
  baseURL: string,
  url: string,
  config?: AxiosRequestConfig
): Promise<IBaseResponseModel<R>> => {
  return baseApi.delete<T, IBaseResponseModel<R>>(url, {
    baseURL: baseURL,
    ...config,
  });
};

const onLogout = async () => {
  localStorage.clear();
  location.replace(ROUTE_PATH.HOME);
};

const getServerSide = async (path: string, query?: any) => {
  try {
    let queryString = "";
    if (query) {
      Object.entries(query).forEach(([name, value]: any) => {
        queryString += name + "=" + value + "&";
      });
    }

    const res = await fetch(
      `${envConfig.API_ENDPOINT}/${path}${
        queryString ? "?" + queryString : ""
      }`,
      {
        headers: {
          [HEADER.API_KEY]: envConfig.X_AUTHKEY,
        },
        method: "GET",
      }
    ).then(r => r.json());

    return res;
  } catch (ex) {
    return BaseResponseError("Không tìm thấy trang", 404);
  }
};

const api = {
  request: _request,
  // getByHandle,
  // putByHandle,
  // postByHandle,
  // deleteByHandle,
  get: _get,
  put: _put,
  post: _post,
  delete: _delete,
  getServerSide,
};

export default api;
