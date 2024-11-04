import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";

import {
  ICoursesItem,
  IParamsCourses,
  IParamsDeleteCourses,
  IParamsDetailsCourses,
  IParamsEditCourses,
  IParamsRegisterCourses,
  IResponseGetAllCourses,
} from "../interface/Services/interface.courses.services";

import { IResponseApi } from "../interface/Services/interface.api.services";

export const getCountTotalCourses = async () => {
  return await api.get<IResponseGetAllCourses>("/courses");
};

export const getAllCourses = async (args: IParamsCourses) => {
  const { name,category_id, page, limit } = args;

  const params = {
    ...(name && { name }),
    ...(category_id && { category_id }),
    page,
    limit,
  };
  return await api.get<IResponseGetAllCourses>("/courses", { params });
};

export const getDetailsCourses = async (args: IParamsDetailsCourses) => {
  const { idCourses } = args;

  return await api.get<ICoursesItem>(`/courses/${idCourses}`);
};

export const registerCourses = async (args: IParamsRegisterCourses) => {
  const {
    id_author,
    category_id,
    name,
    description,
    urlImage
  } = args;

  const datas = {
    id_author,
    category_id,
    name,
    description,
    urlImage
  };

  return await api.post<IResponseApi>("/courses", datas);
};

export const editCourses = async (args: IParamsEditCourses) => {
  const {
    id,
    category_id,
    name,
    description,
    urlImage,
    data,
    status
  } = args;

  const datas = {
    id,
    category_id,
    name,
    description,
    urlImage,
    data,
    status,
    ...(status !== null && { status }),
  };

  return await api.put<IResponseApi>("/courses", datas);
};

export const deleteCourses = async (args: IParamsDeleteCourses) => {
  const { idCourses } = args;

  return await api.delete<IResponseApi>(`/courses/${idCourses}`);
};

export const useRegisterCourses = async () => {
  useMutation({
    mutationFn: (args: IParamsRegisterCourses) =>
      registerCourses(args).then((res) => res.data),
  });
};

export const useEditCourses = async () => {
  useMutation({
    mutationFn: (args: IParamsEditCourses) =>
      editCourses(args).then((res) => res.data),
  });
};

export const useDeleteCourses = async () => {
  useMutation({
    mutationFn: (args: IParamsDeleteCourses) =>
      deleteCourses(args).then((res) => res.data),
  });
};

export const useGetCountTotalCourses = () =>
  useMutation({
    mutationFn: () => getCountTotalCourses().then((res) => res.data.total),
  });

export const useGetAllCourses = () =>
  useMutation({
    mutationFn: (args: IParamsCourses) =>
      getAllCourses(args).then((res) => res.data),
  });

export const useGetDetailsCourses = () =>
  useMutation({
    mutationFn: (args: IParamsDetailsCourses) =>
      getDetailsCourses(args).then((res) => res.data),
  });
