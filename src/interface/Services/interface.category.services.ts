import { IResponseUsersResume } from "./interface.users.services"

export interface IParamsCategory {
    name?: string | null
    description?: string | null
    tag?: string | null
    page?: number | null,
    limit?: number | null
}

export interface IParamsDetailsCategory {
  idCategory?: string | null
}

export interface IParamsDeleteCategory {
    idCategory?: string | null
  }


  export interface IParamsRegisterCategory {
    name: string,
    tag: string,
    description: string,
}

export interface IParamsEditCategory {
    id: string,
    name: string,
    tag: string,
    description: string,
    status?: boolean | null
}

export interface ICategoryItem {
        id: string,
        name: string,
        tag: string,
        status: boolean,
        description: string,
        created_At: string
        id_author?:  string | null
        users: IResponseUsersResume
}

export interface IResponseGetAllCategory {
    items: ICategoryItem[]
    total: number,
    totalPages: number,
    page:number
    limit: number

}
