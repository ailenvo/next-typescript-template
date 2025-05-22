import { ObjectStatus, OrderDirection } from "./model.enum";

export interface IBaseModels {
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface IBasePagingReq {
  pageIndex: number;
  pageSize: number;
  sortNames?: string[];
  sortDirections?: OrderDirection[];
  allItems?: boolean;
  keyword?: string;
  objectStatus?: ObjectStatus;
}

export interface IBasePagingRes<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  isFull: boolean;
}

export interface IBaseResponseModel<T> {
  data: T;
  success: boolean;
  message: string | null;
  statusCode: number;
}

export interface IValue {
  value: any;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: string;
}

export interface IObjectValue {
  [field: string]: any;
}
