import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";

import {
  IUsersItem,
  IParamsUsers,
  IParamsDeleteUsers,
  IParamsDetailsUsers,
  IParamsEditUsers,
  IParamsRegisterUsers,
  IResponseGetAllUsers,
} from "../interface/Services/interface.users.services";

import { IResponseApi } from "../interface/Services/interface.api.services";

export const getCountTotalUsers = async () => {
  return await api.get<IResponseGetAllUsers>("/users");
};

export const getAllUsers = async (args: IParamsUsers) => {
  const { name,email, page, limit } = args;

  const params = {
    ...(name && { name }),
    ...(email && { email }),
    page,
    limit,
  };
  return await api.get<IResponseGetAllUsers>("/users", { params });
};

export const getDetailsUsers = async (args: IParamsDetailsUsers) => {
  const { idUsers } = args;

  return await api.get<IUsersItem>(`/users/${idUsers}`);
};

export const registerUsers = async (args: IParamsRegisterUsers) => {
  const {
    email,name,password,id_author
  } = args;

  const datas = {
    email,name,password,id_author
  };

  return await api.post<IResponseApi>("/users", datas);
};

export const editUsers = async (args: IParamsEditUsers) => {
  const {
    id, 
    id_user_logged, 
    name,
    email,  
    password,
    masterAccess,
    status,
  } = args;

  const datas = {
    id, 
    id_user_logged, 
    name,
    email,  
    password,
    ...(masterAccess !== null && { masterAccess }),
    ...(status !== null && { status }),
  };

  return await api.put<IResponseApi>("/users", datas);
};

export const deleteUsers = async (args: IParamsDeleteUsers) => {
  const { idUsers } = args;

  return await api.delete<IResponseApi>(`/users/${idUsers}`);
};

export const useRegisterUsers = async () => {
  useMutation({
    mutationFn: (args: IParamsRegisterUsers) =>
      registerUsers(args).then((res) => res.data),
  });
};

export const useEditUsers = async () => {
  useMutation({
    mutationFn: (args: IParamsEditUsers) =>
      editUsers(args).then((res) => res.data),
  });
};

export const useDeleteUsers = async () => {
  useMutation({
    mutationFn: (args: IParamsDeleteUsers) =>
      deleteUsers(args).then((res) => res.data),
  });
};

export const useGetCountTotalUsers = () =>
  useMutation({
    mutationFn: () => getCountTotalUsers().then((res) => res.data.total),
  });

export const useGetAllUsers = () =>
  useMutation({
    mutationFn: (args: IParamsUsers) =>
      getAllUsers(args).then((res) => res.data),
  });

export const useGetDetailsUsers = () =>
  useMutation({
    mutationFn: (args: IParamsDetailsUsers) =>
      getDetailsUsers(args).then((res) => res.data),
  });
