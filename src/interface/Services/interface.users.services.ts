import { ICategoryItem } from "./interface.category.services";
import { IClassItem } from "./interface.class.services";
import { ICoursesItem } from "./interface.courses.services";
import { ILiveItem } from "./interface.live.services";

export interface IParamsUsers {
  name?: string | null;
  email?: string | null;
  page?: number | null;
  limit?: number | null;
}

export interface IParamsDetailsUsers {
  idUsers?: string | null;
}

export interface IParamsDeleteUsers {
  idUsers?: string | null;
}

export interface IParamsRegisterUsers {
  name: string;
  email: string;
  password: string;
  id_author?: string | null;
}

export interface IParamsEditUsers {
  id: string | null 
  id_user_logged: string | null  
  name: string | null 
  email: string | null  
  masterAccess: boolean | null 
   password: string | null 
   status: boolean | null 
}

export interface IUsersItem {
  id: string,
  id_author: string,
  name: string,
  email: string,
  status: boolean,
  masterAccess: boolean,
  category: ICategoryItem[],
  courses: ICoursesItem[],
  class: IClassItem[],
  lives: ILiveItem[],
  created_At: string,
  author: {
      id: string,
      name: string,
      email: string
  }
}

export interface IResponseGetAllUsers {
  items: IUsersItem[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}
