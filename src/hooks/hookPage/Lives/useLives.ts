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
//import { aulasWebinarsUniversidadeDelphi } from "../../../constants/mocks/Aulas/AulasPrincipais";

type PropsParams = {
  idLive: number;
};

export const useLives = () => {

  const [allLives, setAllLives] = useState<ILives[]>([]);
  const [liveSelected, setLive] = useState<ILives>();
  const { handleNavigation } = useCustomNavigation()

  const { mutate: getAllLives } = useGetAllLive();
  const { mutate: getCategories } = useGetCategories();

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

  /*

  const handleFilterClassSelected = ({ idAula }: PropsParams) => {
    const live = aulasWebinarsUniversidadeDelphi.find(
      (live) => live.id === idAula
    );
    setClassSelected(live);
  };
  const handleFilterAllClass = ({ category }: PropsParams) => {
    if (category) {
      const otherLives = allClassUD.filter(
        (cls: ILives) =>
          cls.category === category && cls.id !== classSelected?.id
      );
      setAllClass(otherLives);
    }
  };*/

  const handleGetAllLives = ({
    name,
    id_category,
    tag,
    tutor,
  }: IParamsLive) => {
    const params = {
      name,
      tag,
      id_category,
      tutor,
      page,
      limit,
    };
    handleActiveLoading();
    getAllLives(params, {
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
  


  const handleFilterLiveSelected = ({
    idLive,
  }: PropsParams) => {
    const live = livesUniversidadeDelphi.find((live) => live.id === idLive);
    setLive(live);
  };

  const handleFilterAllLives = ({ idLive}: PropsParams) => {
    if (idLive) {
      // Filtra as outras aulas do mesmo curso
      const otherLives = livesUniversidadeDelphi.filter(
        (cls: any) => cls.id !== idLive
      );
      setAllLives(otherLives);
    }
  };


  const dataLiveFormatted = dataLive?.items
  .filter((item) => item !== null && item !== undefined) // Remove nulos e indefinidos
  .map((item) => ({
    name: item.name,
    description: item.description,
    category: item.category?.name ?? 'Nenhum vinculado',
    tag: item.tag,
    tutor: item.tutor,
    actions: [
      { label: "Edit", icon: "edit", onClick: (row: ILiveItem) => console.log("Edit:", row.id) },
      { label: "Delete", icon: "delete", onClick: (row: ILiveItem) => console.log("Delete:", row.id) },
    ],
  }));

  const dataOptionsCategoriesFormated = dataCategories?.items.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
 })

  return {
    dataLive,
    handleNavigation,
    handleFilterLiveSelected,
    handleFilterAllLives,
    handleGetAllLives,
    allLives,
    liveSelected,
    loading,
    page,
    handleGetCategories,
    dataOptionsCategoriesFormated,
    dataCategories,
    dataLiveFormatted,
    handleChangePage,
  };
};
