import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";

import {
  IClassItem,
  IParamsClass,
  IParamsDeleteClass,
  IParamsDetailsClass,
  IParamsEditClass,
  IParamsRegisterClass,
  IResponseGetAllClass,
} from "../interface/Services/interface.class.services";

import { IResponseApi } from "../interface/Services/interface.api.services";

export const getCountTotalClass = async () => {
  return await api.get<IResponseGetAllClass>("/class");
};

export const getAllClass = async (args: IParamsClass) => {
  const { name, data, id_category, tag, tutor, page, limit } = args;

  const params = {
    ...(name && { name }),
    ...(data && { data }),
    ...(id_category && { id_category }),
    ...(tag && { tag }),
    ...(tutor && { tutor }),
    page,
    limit,
  };
  return await api.get<IResponseGetAllClass>("/class", { params });
};

export const getDetailsClass = async (args: IParamsDetailsClass) => {
  const { idClass } = args;

  return await api.get<IClassItem>(`/class/${idClass}`);
};

export const registerClass = async (args: IParamsRegisterClass) => {
  const {
    id_author,
    id_course,
    id_category,
    order,
    name,
    urlImage,
    urlVideo,
    description,
    idURLVideo,
    tutor,
    tag,
    data,
  } = args;

  const datas = {
    id_author,
    id_course,
    id_category,
    order,
    name,
    urlImage,
    urlVideo,
    description,
    idURLVideo,
    tutor,
    tag,
    data,
  };

  return await api.post<IResponseApi>("/class", datas);
};

export const editClass = async (args: IParamsEditClass) => {
  const {
    id,
    id_author,
    id_course,
    id_category,
    order,
    name,
    urlImage,
    urlVideo,
    description,
    idURLVideo,
    tutor,
    tag,
    data,
    status,
  } = args;

  const datas = {
    id,
    id_author,
    id_course,
    id_category,
    order,
    name,
    urlImage,
    urlVideo,
    description,
    idURLVideo,
    tutor,
    tag,
    data,
    ...(status !== null && { status }),
  };

  return await api.put<IResponseApi>("/class", datas);
};

export const deleteClass = async (args: IParamsDeleteClass) => {
  const { idClass } = args;

  return await api.delete<IResponseApi>(`/class/${idClass}`);
};

export const useRegisterClass = async () => {
  useMutation({
    mutationFn: (args: IParamsRegisterClass) =>
      registerClass(args).then((res) => res.data),
  });
};

export const useEditClass = async () => {
  useMutation({
    mutationFn: (args: IParamsEditClass) =>
      editClass(args).then((res) => res.data),
  });
};

export const useDeleteClass = async () => {
  useMutation({
    mutationFn: (args: IParamsDeleteClass) =>
      deleteClass(args).then((res) => res.data),
  });
};

export const useGetCountTotalClass = () =>
  useMutation({
    mutationFn: () => getCountTotalClass().then((res) => res.data.total),
  });

export const useGetAllClass = () =>
  useMutation({
    mutationFn: (args: IParamsClass) =>
      getAllClass(args).then((res) => res.data),
  });

export const useGetDetailsClass = () =>
  useMutation({
    mutationFn: (args: IParamsDetailsClass) =>
      getDetailsClass(args).then((res) => res.data),
  });
