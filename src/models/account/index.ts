import { Roles } from "../common/model.enum";

export interface IUser {
  id: string;
  avatar: string;
  coverImage: string;
  companyName: string;
  phoneNumber: string;
  address1: string;
  fullName?: string;
  email: string;
  roles: Roles[];
}
