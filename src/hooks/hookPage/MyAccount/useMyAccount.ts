import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation";
import { useState } from "react";

import { livesUniversidadeDelphi } from "../../../constants/mocks/Lives";
import { ILives } from "../../../interface/interfaceLive/interface.live";
import { ILiveItem, IParamsLive } from "../../../interface/Services/interface.live.services";
import { useGetCategories } from "../../../services/service.category";
import { useGetAllLive } from "../../../services/service.lives";
import { usePaginations } from "../../../store/paginations";
import { useLoading } from "../../../store/loading";
import { useCategoryState } from "../../../store/category";
import { useLiveState } from "../../../store/live";
import { useGetDetailsUsers } from "../../../services/service.users";
import { IParamsDetailsUsers } from "../../../interface/Services/interface.users.services";
//import { aulasWebinarsUniversidadeDelphi } from "../../../constants/mocks/Aulas/AulasPrincipais";



export const useMyAccount = () => {
  const { handleNavigation } = useCustomNavigation()

  const { mutate: getAllLives } = useGetAllLive();
  const { mutate: getCategories } = useGetCategories();
  const { mutate: getDetailsUsers} = useGetDetailsUsers()
  const { page, limit, handleChangePage } = usePaginations();
 
  const { loading, handleActiveLoading, handleInactiveLoading } = useLoading();
  const {dataCategories, handleDataCategories} = useCategoryState()

  const {dataLive,handleDataLive} = useLiveState()
  
  const handleGetCategories = () => {
    handleActiveLoading();
    getCategories(undefined, {
      onSuccess: (res) => {
        handleInactiveLoading();
        handleDataCategories(res);
      },
      onError: (err) => {
        handleInactiveLoading();
        console.log(err.message);
      },
    });
  };

  const handleGetDetailsAccount = ({
    idUsers
  }: IParamsDetailsUsers) => {
    const params = {
      idUsers
    };
    handleActiveLoading();
    getDetailsUsers(params, {
      onSuccess: (res) => {
        handleInactiveLoading();
        handleDataLive(res);
      },
      onError: (err) => {
        handleInactiveLoading();
        console.log(err.message);
      },
    });
  };
  



  return {
    dataLive,
    handleNavigation,
    handleGetDetailsAccount,
 
    loading,
    page,
    handleGetCategories,
    dataCategories,
    handleChangePage,
  };
};
