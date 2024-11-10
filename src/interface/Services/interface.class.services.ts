import { ICategoryItem } from "./interface.category.services"
import { ICoursesItem } from "./interface.courses.services"
import { IResponseUsersResume } from "./interface.users.services"

export interface IParamsClass {
    name?: string | null
    id_category?: string | null
    id_course?: string | null
    tag?: string | null
    data?: string | null
    tutor?: string | null
    page?: number | null,
    limit?: number | null
}

export interface IParamsDetailsClass {
  idClass?: string | null
}

export interface IParamsDeleteClass {
    idClass?: string | null
  }


  export interface IParamsRegisterClass {
    id_author?:  string | null
    id_course: string,
    id_category: string,
    order?: number | null
    name: string,
    urlImage: string 
    urlVideo: string
    description: string,
    idURLVideo?: string | null,
    tutor?: string | null
    tag?: string | null
    data?: string | null
    
}

export interface IParamsEditClass {
  id: string 
  id_author?:  string | null
  id_course: string,
  id_category: string,
  order?: number | null
  name: string,
  urlImage: string 
  urlVideo: string
  description: string,
  idURLVideo?: string | null,
  tutor?: string | null
  tag?: string | null
  data?: string | null
  status: boolean
}

export interface IClassItem {
  id: string,
  id_author: string,
  idURLVideo: string,
  id_course: string,
  id_category: string,
  name: string,
  description: string,
  data: string,
  tag: string,
  tutor: string,
  urlVideo: string,
  urlImage: string,
  order: number,
  status: boolean,
  users: IResponseUsersResume
  courses: ICoursesItem
  category: ICategoryItem
  created_At: string

}

export interface IResponseGetAllClass {
    items: IClassItem[]
    total: number,
    totalPages: number,
    page:number
    limit: number

}
