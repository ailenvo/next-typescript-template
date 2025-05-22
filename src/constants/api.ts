import { IBaseResponseModel } from "../models/common/model.type";

export const BaseResponseSuccess = <T>(data: T): IBaseResponseModel<T> => {
  return {
    data: data,
    message: "",
    statusCode: 400,
    success: true,
  };
};

export const BaseResponseError = (
  message: string,
  statusCode: number
): IBaseResponseModel<any> => {
  return {
    data: null,
    message,
    statusCode: statusCode,
    success: false,
  };
};
