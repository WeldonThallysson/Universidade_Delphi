import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";

import {
  ILiveItem,
  IParamsLive,
  IParamsDeleteLive,
  IParamsDetailsLive,
  IParamsEditLive,
  IParamsRegisterLive,
  IResponseGetAllLive,
} from "../interface/Services/interface.live.services";

import { IResponseApi } from "../interface/Services/interface.api.services";

export const getCountTotalLive = async () => {
  return await api.get<IResponseGetAllLive>("/live");
};

export const getAllLive = async (args: IParamsLive) => {
  const { name,id_category,tag,data,tutor, page, limit } = args;

 
  const params = {
    ...(name && { name }),
    ...(id_category && { id_category }),
    ...(tag && {tag}),
    ...(data && {data}),
    ...(tutor && {tutor}),
    page,
    limit,
  };
  
  return await api.get<IResponseGetAllLive>("/live", { params });
};

export const getDetailsLive = async (args: IParamsDetailsLive) => {
  const { idLive } = args;

  return await api.get<ILiveItem>(`/live/${idLive}`);
};

export const registerLive = async (args: IParamsRegisterLive) => {
  const {
    category_id,
    name,
    description,
    urlImage,
    id_category,
    urlVideo,
    idURLVideo,
    tag,
    tutor,
  } = args;

  const datas = {
    category_id,
    name,
    description,
    urlImage,
    id_category,
    urlVideo,
    idURLVideo,
    tag,
    tutor,
  };

  return await api.post<IResponseApi>("/live", datas);
};

export const editLive = async (args: IParamsEditLive) => {
  const {
    id,
    name,
    description,
    urlImage,
    data,
    status,
    id_category,
    urlVideo,
    idURLVideo,
    tag,
     tutor,

  } = args;

  const datas = {
    id,
    name,
    description,
    urlImage,
    data,
    status,
    id_category,
    urlVideo,
    idURLVideo,
    tag,
     tutor,
    ...(status !== null && { status }),
  };

  return await api.put<IResponseApi>("/live", datas);
};

export const deleteLive = async (args: IParamsDeleteLive) => {
  const { idLive } = args;

  return await api.delete<IResponseApi>(`/live/${idLive}`);
};

export const useRegisterLive = async () => {
  useMutation({
    mutationFn: (args: IParamsRegisterLive) =>
      registerLive(args).then((res) => res.data),
  });
};

export const useEditLive = async () => {
  useMutation({
    mutationFn: (args: IParamsEditLive) =>
      editLive(args).then((res) => res.data),
  });
};

export const useDeleteLive = async () => {
  useMutation({
    mutationFn: (args: IParamsDeleteLive) =>
      deleteLive(args).then((res) => res.data),
  });
};

export const useGetCountTotalLive = () =>
  useMutation({
    mutationFn: () => getCountTotalLive().then((res) => res.data.total),
  });

export const useGetAllLive = () =>
  useMutation({
    mutationFn: (args: IParamsLive) =>
      getAllLive(args).then((res) => res.data),
  });

export const useGetDetailsLive = () =>
  useMutation({
    mutationFn: (args: IParamsDetailsLive) =>
      getDetailsLive(args).then((res) => res.data),
  });
