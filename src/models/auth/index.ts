import { IUser } from "../account";

export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export interface ILoginRequest {
  username: string | null;
  password: string | null;
}

export interface IUpdatePasswordReq {
  oldPassword?: string;
  newPassword: string;
  confirmPassword?: string;
}
