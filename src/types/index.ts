export interface IAuthUserRequest {
  email: string;
  password: string;
}

export interface IToken {
  auth_token: string;
}

export interface IUserShort {
  email: string;
  first_name: string;
  last_name: string;
  is_customer: boolean;
  photo: string;
  id: number;
}

export interface ICreateUserRequest {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_customer: boolean | undefined;
}

export interface IProfileCustomer {
  id: number;
  post: string;
}

export interface IResume {
  id: number;
  instruments: IDataItem[];
  skills: IDataItem[];
  about: string;
  status: boolean;
}

export interface IUser {
  email: string;
  id: number;
  first_name: string;
  last_name: string;
  photo: string;
  description: string | null;
  is_customer: boolean;
  profilecustomer: IProfileCustomer | null;
  profiledesigner: IProfileDesigner | null;
  resume: IResume | null;
  date_joined: string;
  portfolio: IUserCase[];
}

export interface IUserWithLastCases extends IUser {
  last_cases: [ICase, ICase];
  specialization: object[];
}

export interface IUserCase {
  id: number;
  avatar: string;
}

export interface IDataItem {
  id: number;
  name: string;
}

export interface ICaseImage {
  id: number;
  image: string;
}

export interface IAuthorCase {
  id: number;
  first_name: string;
  last_name: string;
  photo: string;
  specialization: number;
}

export interface ICase {
  id: number;
  author: IAuthorCase;
  title: string;
  sphere: IDataItem;
  instruments: IDataItem[];
  working_term: string;
  description: string;
  is_favorited: boolean;
  is_liked: boolean;
  images: ICaseImage[];
  avatar: string;
}

export interface IListRespons {
  count: number;
  next: string;
  previous: string;
}

export interface ICaseRespons extends IListRespons {
  results: ICase[];
}

export interface IUserRespons extends IListRespons {
  results: IUserWithLastCases[];
}

export interface ICasePreview {
  title: string;
  time: string;
  description: string;
  directions: string;
  wrapper: File;
  images: File[];
  sphereValue: string;
  toolsValue: string[];
}

export interface IOrderDataItem {
  id: number;
  photo: string | null;
  first_name: string;
  last_name: string;
  title: string;
  description: string;
  price: number;
  specialization: string;
  sphere: string;
}

export interface IOrdersResponse {
  count: number;
  next: string;
  previous: string;
  results: [];
}

export interface IOrdersList {
  id: number;
  customer: IOrdersCustomer;
  title: string;
  specialization: IDataItem;
  payment: number;
  sphere: IDataItem;
  description: string;
  pub_date: string;
  is_responded_order: string;
  is_favorited_order: string;
  is_published: boolean;
}

export interface IOrdersCustomer {
  id: 0;
  first_name: string;
  last_name: string;
  photo: string;
  post: string;
}

export interface IUserInfo {
  name: string | null;
  avatar: string | null;
}

export interface IResumeNew {
  instruments: number[];
  skills: number[];
  about: string;
  status: boolean;
}

export interface IUpdateInfoUserMe {
  id?: number;
  photo?: File | unknown;
  specialization?: number[] | string[];
  country?: string | null;
  education?: string | null;
  language?: number[] | string[];
  hobby?: string;
  user?: number;
}

export interface IProfileDesigner {
  id?: number;
  user?: number;
  education?: string | null;
  country?: string | null;
  specialization?: string[] | number[] | null;
  hobby?: string;
  language?: string[] | number[];
  photo?: File | unknown;
}
