import { IClassItem } from "./interface.class.services"; 

export interface IParamsCourses {
  name?: string | null;
  category_id?: string | null;
  page?: number | null,
  limit?: number | null
}

export interface IParamsDetailsCourses {
  idCourses?: string | null;
}

export interface IParamsDeleteCourses {
  idCourses?: string | null;
}

export interface IParamsRegisterCourses {
  id_author: string | null;
  category_id: string | null;
  name: string;
  description: string;
  urlImage: number | null;
}

export interface IParamsEditCourses {
  id: string | null;
  category_id: string | null;
  name: string | null;
  description: string | null;
  urlImage: string | null;
  data: string | null;
  status: boolean | null;
}

export interface ICoursesItem {
  id:string,
  id_author: string,
  category_id: string,
  name: string,
  description: string,
  class: IClassItem[],
  data: string,
  urlImage: string,
  status: boolean,
  created_At: string
}

export interface IResponseGetAllCourses {
  items: ICoursesItem[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}
