import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";

import {
  ICategoryItem,
  IParamsCategory,
  IParamsDeleteCategory,
  IParamsDetailsCategory,
  IParamsEditCategory,
  IParamsRegisterCategory,
  IResponseGetAllCategory,
} from "../interface/Services/interface.category.services";

import { IResponseApi } from "../interface/Services/interface.api.services";

export const getCountTotalCategory = async () => {
  return await api.get<IResponseGetAllCategory>("/category");
};

export const getAllCategory = async (args: IParamsCategory) => {
  const { name, description, page, limit } = args;

  const params = {
    ...(name && {name}),
    ...(description && {description}),
    page,
    limit,
  };
  return await api.get<IResponseGetAllCategory>("/category", { params });
};

export const getAllCategories = async () => {

  return await api.get<IResponseGetAllCategory>("/category");
};

export const getDetailsCategory = async (args: IParamsDetailsCategory) => {
  const { idCategory } = args;

  return await api.get<ICategoryItem>(`/category/${idCategory}`);
};

export const registerCategory = async (args: IParamsRegisterCategory) => {
  const {  name, tag, description } = args;

  const data = {
    name,
    tag,
    description,
  };
  return await api.post<IResponseApi>("/category", data);
};

export const editCategory = async (args: IParamsEditCategory) => {
  const { id, name, tag, description, status } = args;

  const data = {
    id,
    name,
    tag,
    description,
    ...(status !== null && { status }),
  };

  return await api.put<IResponseApi>("/category", data);
};

export const deleteCategory = async (args: IParamsDeleteCategory) => {
  const { idCategory } = args;

  return await api.delete<IResponseApi>(`/category/${idCategory}`);
};

export const useRegisterCategory = async () => {
  useMutation({
    mutationFn: (args: IParamsRegisterCategory) =>
      registerCategory(args).then((res) => res.data),
  });
};

export const useEditCategory = async () => {
  useMutation({
    mutationFn: (args: IParamsEditCategory) =>
      editCategory(args).then((res) => res.data),
  });
};

export const useDeleteCategory = async () => {
  useMutation({
    mutationFn: (args: IParamsDeleteCategory) =>
      deleteCategory(args).then((res) => res.data),
  });
};

export const useGetCountTotalCategory = () =>
  useMutation({
    mutationFn: () => getCountTotalCategory().then((res) => res.data.total),
  });

export const useGetAllCategory = () =>
  useMutation({
    mutationFn: (args: IParamsCategory) =>
      getAllCategory(args).then((res) => res.data),
  });

export const useGetCategories = () =>
    useMutation({
      mutationFn: () =>
        getAllCategories().then((res) => res.data),
    });
  

export const useGetDetailsCategory = () =>
  useMutation({
    mutationFn: (args: IParamsDetailsCategory) =>
      getDetailsCategory(args).then((res) => res.data),
  });
