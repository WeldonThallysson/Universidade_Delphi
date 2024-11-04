import { IClassItem } from "./interface.class.services";

export interface IParamsLive {
  name?: string | null;
  category_id?: string | null;
  page?: number | null;
  limit?: number | null;
}

export interface IParamsDetailsLive {
  idLive?: string | null;
}

export interface IParamsDeleteLive {
  idLive?: string | null;
}

export interface IParamsRegisterLive {
  id_category: string | null;
  category_id: string | null;
  name: string;
  description: string;
  urlImage: string | null;
  urlVideo: string | null
  idURLVideo?: string | null
  tutor?: string | null
  tag?: string | null
}

export interface IParamsEditLive {
  id: string | null;
  id_category: string | null;
  name: string | null;
  description: string | null;
  urlImage: string | null;
  urlVideo: string | null;
  idURLVideo?: string | null;
  tutor?: string | null;
  tag?: string | null
  data?: string | null
  status?: boolean | null;
}

export interface ILiveItem {
  id: string;
  id_author: string;
  id_category: string;
  idURLVideo: string;
  name: string;
  description: string;
  data: string;
  tag: string;
  tutor: string;
  urlVideo: string;
  urlImage: string;
  status: boolean | null;
  created_At: string | null;
}

export interface IResponseGetAllLive {
  items: ILiveItem[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}
